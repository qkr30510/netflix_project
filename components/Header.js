import Link from "next/link";

const HeaderStyle = {
  display: "flex",
  flex: "1",
  justifyContent: "space-around",
  background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0))",
  height: "68px",
  alignItems: "center",
  justifyContent: "spaceAround",
  color: "#fff",
  padding: "0 4%",
};

const li = {
  float: "left",
  "margin-left": "20px",
};
const a = {
  color: "#fff",
};

const rightNavi = {
  "margin-left": "auto",
};
const logo = {
  "margin-righ": "25px",
};

const pageNameList = [
  { id: 1, koName: "홈", enName: "/" },
  { id: 2, koName: "티비 프로그램", enName: "/TvProgram" },
  { id: 3, koName: "영화", enName: "/Movie" },
  { id: 4, koName: "최신 콘텐츠", enName: "/LatestContents" },
  { id: 5, koName: "티비 프로그램", enName: "/MyList" },
];

const pageNameList2 = [
  { id: 6, koName: "돋", enName: "/" },
  { id: 7, koName: "키즈", enName: "/TvProgram" },
  { id: 8, koName: "선물", enName: "/Movie" },
  { id: 9, koName: "벨", enName: "/LatestContents" },
  { id: 5, koName: "티비 프로그램", enName: "/MyList" },
];

const pageName = pageNameList.map((pageNames) => (
  <li key={pageNames.id} style={li}>
    <Link href={pageNames.enName}>
      <a style={a}>{pageNames.koName}</a>
    </Link>
  </li>
));

const pageName2 = pageNameList2.map((pageNames) => (
  <li key={pageNames.id} style={li}>
    <Link href={pageNames.enName}>
      <a style={a}>{pageNames.koName}</a>
    </Link>
  </li>
));

const Header = () => (
  <div style={HeaderStyle}>
    <h1>
      <Link href="/">로고자리</Link>
    </h1>
    <ul>{pageName}</ul>
    <ul style={rightNavi}>{pageName2}</ul>
  </div>
);

export default Header;
