import Icon from "@ant-design/icons";

const MobileHomeIconSvg = () => (
  <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.8671 0L0 8.44646V24H7.47658V14.6108H14.2577V24H21.7342V8.44646L10.8671 0Z"
      fill="#A4A4A4"
    />
  </svg>
);

export const MobileHomeIcon = (props) => <Icon component={MobileHomeIconSvg} {...props} />;
