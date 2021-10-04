import React, { useEffect, useState } from "react";
import * as professionalService from "./professionalService";

import { Professional } from "./Professional";
import ProfessionalItem from "./ProfessionalItem";

const ProfessionalList = () => {
  const [loading, setLoading] = useState(true);
  const [professionals, setProfessionals] = useState<Professional[]>([]);

  const loadProfessionals = async () => {
    const res = await professionalService.getProfessionals();
    
    const formatedProfessionals = res.data.map((professional: { createdAt: string | number | Date; updatedAt: string | number | Date; }) => {  
        return {
          ...professional,
          createdAt: professional.createdAt ? new Date(professional.createdAt) : new Date(),
          updatedAt: professional.updatedAt ? new Date(professional.updatedAt) : new Date(),
        };
      })
      .sort((a: { createdAt: { getTime: () => number; }; }, b: { createdAt: { getTime: () => number; }; }) => b.createdAt.getTime() - a.createdAt.getTime());

    setProfessionals(formatedProfessionals);
    setLoading(false);
  };

  useEffect(() => {
    loadProfessionals();
  }, []);

  if (loading)
    return (
      <div className="row">
        <div className="col-md-12 my-auto">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );

  if (professionals.length === 0) return <div>there are no data yet</div>;

  return (
    <div className="row">
      {professionals.map((professional) => (
        <ProfessionalItem professional={professional} key={professional._id} loadProfessionals={loadProfessionals} />
      ))}
    </div>
  );
};

export default ProfessionalList;