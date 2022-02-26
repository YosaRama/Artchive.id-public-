function dashboardSession({ session, data }) {
  if (session) {
    if (session.user.role == "ADMIN") {
      return {
        props: data,
      };
    } else {
      return {
        redirect: {
          destination: "/profile",
          permanent: true,
        },
      };
    }
  } else {
    return {
      redirect: {
        destination: "/dashboard/login",
        permanent: true,
      },
    };
  }
}

export default dashboardSession;
