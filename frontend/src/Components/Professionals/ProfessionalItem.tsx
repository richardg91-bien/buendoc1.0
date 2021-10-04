import React from "react";
import ReactPlayer from "react-player";
import {useHistory} from 'react-router-dom'

import * as professionalService from "./professionalService";
import { Professional } from "./Professional";

import "./ProfessionalItem.css";

interface Props {
  professional: Professional;
  loadProfessionals: () => void;
}

const ProfessionalItem = (props: Props) => {
  const { professional, loadProfessionals } = props;

  const history = useHistory();

  const handleDelete = async (id: string) => {
    await professionalService.deleteProfessionalById(id);
    loadProfessionals();
  };

  return (
    <div className="col-md-4 p-2">
      <div
        className="card card-body video-card animate__animated animate__backInUp"
        style={{ cursor: "pointer" }}
        onClick={() => history.push(`/update/${professional._id}`)}
      >
        <div className="d-flex justify-content-between">
          <h5>{professional.title}</h5>
          <span
            className="text-danger"
            onClick={() => professional._id && handleDelete(professional._id)}
          >
            X
          </span>
        </div>
        <p>{professional.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer url={professional.url} />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalItem;