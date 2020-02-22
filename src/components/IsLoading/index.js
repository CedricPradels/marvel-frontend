import React from "react";

import "./IsLoading.css";

const IsLoading = () => {
  return (
    <div className="isLoading">
      <img src={require("../../images/is-loading.gif")} alt="isLoading..." />
    </div>
  );
};

export default IsLoading;
