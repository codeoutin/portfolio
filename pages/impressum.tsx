import Head from "next/head";
import { Toolbar } from "@material-ui/core";
import { motion } from "framer-motion";
import BackHomeButton from "components/Projects/BackHomeButton";

function impressumPage() {
  return (
    <>
      <Head>
        <title>Patrick Steger - Impressum</title>
      </Head>
      <motion.div
        key="impressum"
        initial={{ opacity: 0, x: +1000 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: +1000 }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <Toolbar />
        <div className="MuiContainer-root MuiContainer-maxWidthLg">
            <h1>Impressum</h1>
            <h2 id="m46">Diensteanbieter</h2>
            Patrick Steger - IT Beratung<br/>
            Warschauer Str. 12A<br/>
            10243 Berlin

            <h2 id="m56">Kontaktmöglichkeiten</h2>E-Mail-Adresse: <a href="mailto:ps@psteger.com">ps@psteger.com</a><br/>
            Telefon: 030 209667060

            <h2 id="m58">Angaben zum Unternehmen</h2>Umsatzsteuer Identifikationsnummer (USt-ID): DE323289298

            <h2 id="m172">Social Media und andere Onlinepräsenzen</h2><p>Dieses Impressum gilt auch für die folgenden Social-Media-Präsenzen und Onlineprofile: </p>
            <p><a href="https://www.linkedin.com/in/p-steger/" target="_blank">https://www.linkedin.com/in/p-steger/</a></p>

            <p><a href="https://datenschutz-generator.de/" title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." target="_blank" rel="noopener noreferrer nofollow">Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke</a></p>

        </div>
        <BackHomeButton />
      </motion.div>
    </>
  );
}

export default impressumPage;
