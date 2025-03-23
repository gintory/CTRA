import { Carousel } from "antd";
import React from "react";

const imgs = [
  "http://jnd.9zhuowang.cn/uploads/allimg/180515/1-1P5151A6230-L.png",
  "http://jnd.9zhuowang.cn/uploads/allimg/180515/1-1P5151A6000-L.png",
  "http://jnd.9zhuowang.cn/uploads/allimg/180515/1-1P5151A6230-L.png",
];

const Home: React.FC = () => {
  return (
    <div>
      <Carousel arrows autoplay className="carousel">
        {imgs.map((d, i) => (
          <img key={i} src={d} className="carousel-item" />
        ))}
      </Carousel>
      <section style={{ padding: 60 }}>
        <h1>协会简介</h1>
        <h4>加拿大教师监管协会</h4>
        <br />
        <p>
          CTRA 机构协会简介 加拿大教师监管协会，英文全称为：Canadian Teachers
          Regulatory Association, 以下简称：CTRA。
          <br /> <br />
          是一个在加拿大注册，被加拿大政府认可的全球性、非盈利性、学术性的教师监管机构。
          <br /> <br />
          职责为监管教师教育行为规范，评估教学质量与能力。旨在汇聚全球优质教育资源，尤其致力于K12领域，以规范教师行为标准和评定教师教学等级为核心，持续为社会提供服务于各教育行业的精英，是教育事业稳定蓬勃发展的重要力量。
        </p>
      </section>
    </div>
  );
};

export default Home;
