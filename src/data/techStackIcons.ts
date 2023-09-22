import { StaticImageData } from "next/image";

import AWS from "../../public/images/tech-stack-icons/aws.png";
import CSS from "../../public/images/tech-stack-icons/css.png";
import C_PP from "../../public/images/tech-stack-icons/cpp.png";
import Django from "../../public/images/tech-stack-icons/django.png";
import Express from "../../public/images/tech-stack-icons/expressJS.png";
import FastAPI from "../../public/images/tech-stack-icons/fastapi.png";
import Flask from "../../public/images/tech-stack-icons/flask.png";
import Javascript from "../../public/images/tech-stack-icons/javascript.png";
import Jest from "../../public/images/tech-stack-icons/jest.png";
import jQuery from "../../public/images/tech-stack-icons/jquery.png";
import MongoDB from "../../public/images/tech-stack-icons/mongodb.png";
import NextJS from "../../public/images/tech-stack-icons/nextJS.png";
import Node from "../../public/images/tech-stack-icons/nodeJS.png";
import Pandas from "../../public/images/tech-stack-icons/pandas.png";
import PostgresQL from "../../public/images/tech-stack-icons/postgresql.png";
import Python from "../../public/images/tech-stack-icons/python.png";
import React from "../../public/images/tech-stack-icons/reactJS.png";
import Redux from "../../public/images/tech-stack-icons/redux.png";
import SQL from "../../public/images/tech-stack-icons/sql.png";
import Typescript from "../../public/images/tech-stack-icons/typescript.png";
import Vue from "../../public/images/tech-stack-icons/vue.png";

const techStackIcons: {[k: string]: StaticImageData} = {
  // Frontend
  Javascript, Typescript, React, Redux, jQuery, CSS, Vue, NextJS,
  // Backend
  Python, Flask, Django, FastAPI, Node, Express, PostgresQL, MongoDB,
  // Other
  Jest, AWS, "C++": C_PP, Pandas, SQL
}

export default techStackIcons;
