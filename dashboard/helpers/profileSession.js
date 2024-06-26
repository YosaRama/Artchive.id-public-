function profileSession({ session, data }) {
  if (session && session?.user?.role) {
    return {
      props: data,
    };
  }

  if (session && !session.user.role) {
    return {
      redirect: {
        destination: "/register/role-selection",
        permanent: true,
      },
    };
  }

  if (!session && !session?.user?.role) {
    return {
      redirect: {
        destination: "/signin",
        permanent: true,
      },
    };
  }
}

export default profileSession;
