function profileSession({ session, data }) {
  if (session) {
    return {
      props: data,
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
