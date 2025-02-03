import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './detailService.css'

const DetailService = () => {
  const { title } = useParams();
  console.log(title)
  const { services } = useSelector((state) => state.services);

  return (
    <div className="detail-container">
      <div className="detail-content">
        {services.map(
          (service) =>
            service.title === title && (
              <div className="detail-service">
                <img src={service.image} alt="" />
                <div className="dtail-info">
                  <h1>{service.title}</h1>
                  <h4>{service.description}</h4>
                  <ul>
                    {service.details.map((dt) => (
                      <li>{dt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default DetailService;
