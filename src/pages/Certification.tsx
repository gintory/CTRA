import { Table, TableProps } from "antd";
import React from "react";
import { dataSource } from "./const";

export interface DataType {
  condition: string;
  credits: number;
  certificate: string;
}

const Certification: React.FC = () => {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "条件",
      dataIndex: "condition",
    },
    {
      title: "可认证学分",
      dataIndex: "credits",
      onCell: (_, index) => {
        if (index === 8) {
          return { rowSpan: 8 };
        }
        if (index && index > 8) {
          return { rowSpan: 0 };
        }
        return {};
      },
    },
    {
      title: "证书",
      dataIndex: "certificate",
      onCell: (_, index) => {
        if (index === 2) {
          return { rowSpan: 3 };
        }
        if (index === 4 || index === 3) {
          return { rowSpan: 0 };
        }
        if (index === 6) {
          return { rowSpan: 2 };
        }
        if (index === 7) {
          return { rowSpan: 0 };
        }
        if (index === 8) {
          return { rowSpan: 8 };
        }
        if (index && index > 8) {
          return { rowSpan: 0 };
        }
        return {};
      },
    },
  ];

  return (
    <div className="certification">
      <img
        style={{ width: "100%" }}
        src="http://jnd.9zhuowang.cn/uploads/allimg/20220602/1-22060211453aT.jpg"
        alt=""
      />
      <section style={{ padding: "60px" }}>
        <p>
          CTRA国际汉语教师资格证是加拿大教师监管协会（Canadian Teachers
          Regulatory
          Association）所认证的证书之一，通过对资质认可的方式，将资质证书执照和未来岗位需求相衔接，并为这些教育精英授予会员资格，持续为他们带来资源、人脉、工作岗位推荐和技术支持。
        </p>
        <p>可通过学习课程并通过考试获得十五学分；</p>
        <p>
          若符合以下条件可免考兑换对应学分，如获得十五学分也可申请CTRA国际汉语教师资格证。
        </p>
        <p style={{ color: "red" }}>请把所有的证书放在一份文件中上传</p>
      </section>
      <Table
        pagination={false}
        style={{ margin: "0 60px 60px" }}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default Certification;
