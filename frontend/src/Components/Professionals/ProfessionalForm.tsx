import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import * as professionalService from "./professionalService";
import { Professional } from "./Professional";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
  id?: string;
}

const ProfessionalForm = () => {
  const initialState = {
    title: "",
    description: "",
    url: "",
  };

  const [professional, setProfessional] = useState<Professional>(initialState);

  const history = useHistory();
  const params = useParams<Params>();

  const getProfessional = async (id: string) => {
    const res = await professionalService.getProfessionalById(id);
    const { title, description, url } = res.data;
    setProfessional({ title, description, url });
  };

  useEffect(() => {
    if (params.id) getProfessional(params.id);
  }, [params.id]);

  const handleInputChange = (e: InputChange) =>
    setProfessional({ ...professional, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!params.id) {
      await professionalService.createNewProfessional(professional);
      setProfessional(initialState);
      toast.success("New Professional Added");
    } else {
      await professionalService.updateProfessional(params.id, professional);
    }
    history.push("/professionals");
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card my-auto">
          <div className="card-body">
            <h3>New Professional</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a Title for this video"
                  className="form-control"
                  autoFocus
                  onChange={handleInputChange}
                  value={professional.title}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleInputChange}
                  value={professional.url}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Write a description"
                  onChange={handleInputChange}
                  value={professional.description}
                ></textarea>
              </div>

              {params.id ? (
                <button className="btn btn-info">Update</button>
              ) : (
                <button className="btn btn-primary">Create</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalForm;