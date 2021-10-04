import { Response, RequestHandler } from "express";
import Professional from "./Professional";

export const createProfessional: RequestHandler = async (req, res) => {
  const professionalFound = await Professional.findOne({ url: req.body.url });
  if (professionalFound)
    return res.status(303).json({ message: "the url already exists" });

  const newProfessional  = new Professional(req.body);
  const savedProfessional = await newProfessional.save();
  res.json(savedProfessional);
};

export const getProfessionals: RequestHandler = async (req, res) => {
  try {
    const professionals = await Professional.find();
    return res.json(professionals);
  } catch (error) {
    res.json(error);
  }
};

export const getProfessional: RequestHandler = async (req, res) => {
  const professionalFound = await Professional.findById(req.params.id);

  if (!professionalFound) return res.status(204).json();

  return res.json(professionalFound);
};

export const deleteProfessional: RequestHandler = async (req, res) => {
  const professionalFound = await Professional.findByIdAndDelete(req.params.id);

  if (!professionalFound) return res.status(204).json();

  return res.status(204).json();
};

export const updateProfessional: RequestHandler = async (
  req,
  res
): Promise<Response> => {
  const professionalUpdated = await Professional.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!professionalUpdated) return res.status(204).json();
  return res.json(professionalUpdated);
};