import { Box, Button, Link, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
import { WalletMultiButton } from "@solana/wallet-adapter-material-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(1),
    "&.hidden": {
      visibility: "hidden",
    },
  },
  connected: {
    color: green[500],
  },
  connectedBubble: {
    backgroundColor: green[500],
    height: 12,
    width: 12,
    borderRadius: "50%",
    marginRight: theme.spacing(0.5),
  },
  title: {
    fontWeight: 700,
  },
}));

export default function Intro({
  votes,
  initializeVoting,
  programID,
  voteAccount,
}) {
  const wallet = useWallet();
  const classes = useStyles();
  return (
    <Box textAlign="center">
      <Typography
        component="h1"
        variant="h3"
        gutterBottom
        className={classes.title}
      >
        ¿Team Calor o Team Frío?
      </Typography>
      <Typography variant="body1">
        Es tiempo de cerrar este debate: ¿Cuál es el mejor clima?
      </Typography>
      <Typography variant="body1">
        Vota en la blockchain de{" "}
        <Link href="https://solana.com/" underline="always">
          Solana
        </Link>{" "}
        y ayúdanos a decidir esto de una vez por todas.
      </Typography>
      <Box marginTop="8px">
        {wallet.connected ? (
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box className={classes.connectedBubble} />
            <Typography variant="body1" className={classes.connected}>
              Conectado
            </Typography>
          </Box>
        ) : (
          <Typography variant="body1">
            Para empezar, conecta tu billeteta abajo:
          </Typography>
        )}
        <WalletMultiButton
          className={
            wallet.connected
              ? [classes.button, "hidden"].join(" ")
              : classes.button
          }
        />
      </Box>
      {(typeof votes.crunchy !== "number" ||
        typeof votes.crunchy !== "number") &&
        wallet.connected && (
          <Box marginTop="8px">
            <Typography variant="body1">
              Este{" "}
              <Link
                href={`https://explorer.solana.com/address/${programID.toString()}`}
                underline="always"
              >
                programa
              </Link>
              <Link
                href={`https://explorer.solana.com/address/${voteAccount?.publicKey.toString()}`}
                underline="always"
              >
                {" "}con esta cuenta
              </Link>{" "}
              no ha sido inicializada todavía:
            </Typography>
            <Button
              color="primary"
              variant="contained"
              onClick={initializeVoting}
              className={classes.button}
            >
              Inicializar Programa
            </Button>
          </Box>
        )}
    </Box>
  );
}
