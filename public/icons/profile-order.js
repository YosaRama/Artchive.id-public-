import Icon from "@ant-design/icons";

const ProfileOrderIconSvg = () => (
  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M38 12H26C24.9 12 24 11.1 24 10C24 8.9 24.9 8 26 8H38C39.1 8 40 8.9 40 10C40 11.1 39.1 12 38 12ZM38 0H26C24.9 0 24 0.9 24 2C24 3.1 24.9 4 26 4H38C39.1 4 40 3.1 40 2C40 0.9 39.1 0 38 0ZM26 20H38C39.1 20 40 19.1 40 18C40 16.9 39.1 16 38 16H26C24.9 16 24 16.9 24 18C24 19.1 24.9 20 26 20ZM20 4V16C20 18.2 18.2 20 16 20H4C1.8 20 0 18.2 0 16V4C0 1.8 1.8 0 4 0H16C18.2 0 20 1.8 20 4ZM15.8 14.4L13.28 11.04C13.1865 10.9174 13.0663 10.8177 12.9285 10.7484C12.7908 10.6792 12.6391 10.6422 12.4849 10.6403C12.3307 10.6383 12.1781 10.6715 12.0386 10.7373C11.8992 10.8031 11.7765 10.8998 11.68 11.02L9 14.52L7.3 12.46C7.20481 12.3444 7.08487 12.2516 6.94904 12.1886C6.8132 12.1255 6.66494 12.0938 6.5152 12.0957C6.36546 12.0976 6.21806 12.1332 6.08389 12.1997C5.94972 12.2662 5.83219 12.362 5.74 12.48L4.26 14.38C4.14377 14.5271 4.07122 14.7039 4.05064 14.8902C4.03006 15.0766 4.06227 15.2649 4.14359 15.4338C4.22492 15.6027 4.35209 15.7454 4.51059 15.8455C4.66909 15.9456 4.85253 15.9991 5.04 16H15C15.1857 16 15.3678 15.9483 15.5257 15.8507C15.6837 15.753 15.8114 15.6133 15.8944 15.4472C15.9775 15.2811 16.0126 15.0952 15.996 14.9102C15.9793 14.7252 15.9114 14.5486 15.8 14.4Z"
      fill="#C4C4C4"
    />
  </svg>
);

export const ProfileOrderIcon = (props) => <Icon component={ProfileOrderIconSvg} {...props} />;
