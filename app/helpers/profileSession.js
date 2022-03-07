function profileSession({ session, data }) {
  if (session) {
    return {
      props: data,
    };
  } else {
    return {
      redirect: {
        destination: "/login",
        permanent: true,
      },
    };
  }
}

export default profileSession;
