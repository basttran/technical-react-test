import React, { Component } from "react";

import ArticlesTable from "./ArticlesTable.js";

import "./FilterNav.css";

class FilterNav extends Component {


  render() {
    return (
      <section className="filter-nav">
        <h2 className="page-title">Choose please</h2>
        <form>
          <label>
            <input
              type="checkbox"
              checked={this.props.filters.women}
              onChange={event => this.props.onBox(event)}
              name="women"
            />
            <p className="paragraph">women</p>
          </label>
          <label>
            <input
              type="checkbox"
              checked={this.props.filters.men}
              onChange={event => this.props.onBox(event)}
              name="men"
            />
            <p className="paragraph">men</p>
          </label>
          <label>
            <input
              type="checkbox"
              checked={this.props.filters.other}
              onChange={event => this.props.onBox(event)}
              name="other"
            />
            <p className="paragraph">other</p>
          </label>
        </form>

        <ArticlesTable page={this.props.page}/>

        {/* Ici une div/component avec le nombre de boutons générés en fonction de la taille de la selection (donc  avec modulo 9)
        en fonction du bouton cliqué on slice (0,8) ou (9, 17) ou (18,26)....*/}
      </section>
    );
  }
}

export default FilterNav;
