import React from "react"
import "../filter/filter.css"
import cancel from "../filter/cancel.svg"
const Filter = ({ closeModal }) => {
  return (
    <div className="filter-component">
      <div className="filter-top">
        <span>Filter by</span>
        <span>
          <img
            src={cancel}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={closeModal}
          />
        </span>
      </div>
      <div className="filter-sub-text">Time created</div>

      <div className="checkboxes">
        <div className="boxes">
          Any time
          <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>

        <div className="boxes">
          This month
          <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>

        <div className="boxes">
          This month
          <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>

        <div className="boxes">
          Past 24 hours
          <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>

      <div className="filter-sub-text">Due Date</div>

      <div className="checkboxes">
        <div className="boxes">
          This week
          <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>

        <div className="boxes">
          This month
          <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>

        <div className="boxes">
          Tomorrow
          <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>

        <div className="boxes">
          Today
          <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Filter
