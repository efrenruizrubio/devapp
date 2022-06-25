import { Box, Link, List, ListItem, Typography } from "@material-ui/core";
import React from "react";

// If this user has voted during this session, show them their transaction history
export default function VoteHistory({ voteTxHistory }) {
  if (voteTxHistory.length < 1) {
    return <Box />;
  }
  return (
    <Box textAlign="center" marginTop="16px">
      <Typography variant="h4">Has votado con éxito</Typography>
      <Typography variant="body1">
        Gracias por aportar tu opinión en este tema tan importante.
      </Typography>
      <Typography variant="body1">
        Checa tu voto {voteTxHistory.length === 1 ? "vote" : "votes"} en la
        blockchain de Solana.
      </Typography>
      <List>
        {voteTxHistory.map((txID, i) => (
          <ListItem key={txID} style={{ justifyContent: "center" }}>
            <Link
              href={`https://explorer.solana.com/tx/${txID}`}
              underline="always"
            >{`Vote ${i + 1}`}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
