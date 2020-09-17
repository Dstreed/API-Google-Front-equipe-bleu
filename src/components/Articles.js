import React from "react";

const Articles = () => {
  const style = { width: "18rem" };
  return (
    <article className="col-lg-6 mb-33">
      <div className="card" style={style}>
        <div className="card-body shadow p-3">
          <h2 className="h5 card-title d-flex aling-items-center justify-content-between">
            <span>Card title</span> <small>variants</small>
          </h2>
          <p className="card-subtitle badge bg-dark mb-2 text-light">
            Card subtitle
          </p>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">
            Card link
          </a>
        </div>
      </div>
    </article>
  );
};

export default Articles;
