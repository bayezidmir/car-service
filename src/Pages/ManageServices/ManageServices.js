import React from "react";
import useServices from "../../Hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainingServices = services.filter(
              (service) => service._id !== id
            );
            setServices(remainingServices);
          }
        });
    }
  };

  return (
    <div className="p-5">
      <h2>Manage Your Services</h2>
      <div className="p-5">
        {services.map((service) => (
          <ul key={service._id}>
            <p>
              {service.name}{" "}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(service._id)}
              >
                X
              </button>
            </p>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
