function profileSession({ session, data }) {
  if (session && session?.user?.role) {
    return {
      props: data,
    };
  } else if (session && !session?.user?.role) {
    return {
      redirect: {
        destination: "/register/role-selection",
        permanent: true,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/signin",
        permanent: true,
      },
    };
  }
}

export default profileSession;
