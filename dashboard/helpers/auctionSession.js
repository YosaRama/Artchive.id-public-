function auctionSession({ session, data, id }) {
  if (session && session?.user?.role === "auction-participant") {
    return {
      props: data,
    };
  } else {
    return {
      redirect: {
        destination: `/auction/${id}/lots`,
        permanent: true,
      },
    };
  }
}

export default auctionSession;
