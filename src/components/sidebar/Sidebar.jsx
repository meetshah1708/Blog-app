import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar col-xs-12 ">
      <div className="sidebarItem">
        <div className="sidebartitle">About me</div>
        <img src="" alt=".." />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis labore
          perferendis et pariatur ab quae, molestias harum quos velit, sit
          placeat unde consectetur voluptatum facere praesentium? Repellendus
          dolore voluptatem soluta.
        </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebartitle">CATEGORIES</div>
        <div className="sidebarlist">
          <ul>
            <li className="listitem">Music</li>
            <li className="listitem">Life</li>
            <li className="listitem">Gaming</li>
            <li className="listitem">Technology</li>
          </ul>
        </div>
      </div>
      <div className="sidebarItem">
        <div className="sidebartitle">Connect with us:</div>
        <div className="social ">
          <span>
            <i
              className="socialicon fa-brands fa-instagram"
              aria-hidden="true"
            ></i>
          </span>
          <i
            className=" socialicon fa-brands fa-twitter"
            aria-hidden="true"
          ></i>
          <i
            className="socialicon  fa-brands fa-linkedin"
            aria-hidden="true"
          ></i>
          <i className="socialicon fa-brands fa-facebook"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
