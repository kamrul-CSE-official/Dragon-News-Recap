import Marquee from "react-fast-marquee";

export default function BreakingNews() {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee speed={100} pauseOnHover={true}>
        <p className="mr-12">
          {" "}
          I can be a React component, multiple React components, or just some
          text...
        </p>
        <p className="mr-12">
          {" "}
          I can be a React component, multiple React components, or just some
          text...
        </p>
      </Marquee>
    </div>
  );
}
