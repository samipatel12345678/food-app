import React from 'react'

export default function Card() {
  return (
    <>  <div>
    <div
      className="card mt-3"
      style={{ width: " 18rem", maxHeight: "360px" }}
    >
      <img className="card-img-top" src="https://t3.ftcdn.net/jpg/02/28/09/68/240_F_228096810_uZQVXuclYZoBcfDjvw9qttl000Pd1Wel.jpg" alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is some important text</p>
        <div className="container w-100">
          <select className="m-2 h-2 bg-success rounded">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-2 bg-success rounded">
            <option value="half">Half</option>
            <option value="half">Full</option>
          </select>
          <div className="d-inline h-100">Total price</div>
        </div>   
      </div>
    </div>
  </div>
  <div></div> </>   
  )
}

