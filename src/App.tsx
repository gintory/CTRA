import { Menu, Layout } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.less";
import Qualification from "./pages/Qualification";
import Certification from "./pages/Certification";
import Apply from "./pages/Apply";
import Teacher from "./pages/Teacher";
const { Header, Content, Footer } = Layout;

const footerImgs = [
  "http://jnd.9zhuowang.cn/uploads/allimg/20220813/1-220Q31IJ6151.jpg",
  "http://jnd.9zhuowang.cn/uploads/allimg/20220813/1-220Q31IJA31.jpg",
  "http://jnd.9zhuowang.cn/uploads/allimg/20220813/1-220Q31IJA96.jpg",
  "http://jnd.9zhuowang.cn/uploads/allimg/20220813/1-220Q31IJBU.jpg",
];

function App() {
  return (
    <Layout style={{ width: "100%" }}>
      <Header
        className="header"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img
          src="http://jnd.9zhuowang.cn/uploads/allimg/20220602/1-220602143Q6125.png"
          style={{ marginRight: 20 }}
        />

        <Menu
          theme="dark"
          className="menu"
          mode="horizontal"
          defaultSelectedKeys={["home"]}
        >
          <Menu.Item key="home">
            <Link to="/home">首页</Link>
          </Menu.Item>
          <Menu.Item key="teacher">
            <Link to="/teacher">优秀教师</Link>
          </Menu.Item>
          <Menu.SubMenu title="国际汉语教师资格证" key="ctra">
            <Menu.Item key="qualification">
              <Link to="/qualification">考试资格</Link>
            </Menu.Item>
            <Menu.Item key="certification">
              <Link to="/certification">学分认证</Link>
            </Menu.Item>
          </Menu.SubMenu>
          {/* <Menu.Item key="apply">
            <Link to="/apply">在线报名</Link>
          </Menu.Item> */}
        </Menu>
      </Header>
      <Content
        className="content"
        style={{ height: "calc(100vh - 64px)", padding: "0" }}
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/">
            <Route path="/qualification" element={<Qualification />} />
            <Route path="/certification" element={<Certification />} />
          </Route>
          <Route path="/apply" element={<Apply />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer className="footer" style={{ textAlign: "center" }}>
          <h1>协会联盟</h1>
          <div className="img-list">
            {footerImgs.map((src, i) => (
              <img
                src={src}
                key={i}
                style={{ width: 210, height: 70, margin: "0 10px" }}
              />
            ))}
          </div>
          <img
            style={{ marginTop: 20 }}
            src="http://jnd.9zhuowang.cn/uploads/allimg/20220602/1-220602143Q6125.png"
          />
          <p>
            Copyright © {new Date().getFullYear()}加拿大教师监管协会 版权所有
          </p>
          <p>电话：联系Dany</p>
          <p>企业邮箱： CanadaTRA@outlook.com </p>
        </Footer>
      </Content>
    </Layout>
  );
}

export default App;
