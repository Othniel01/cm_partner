type AssesmentEmailProps = {
    testUrl: string;
};

export function assesmentEmailTemplate({ testUrl }: AssesmentEmailProps) {
    return {
        subject: "Maturity Model Assesment",
        htmlBody: `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to CATCM</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      background-color: #f8fafc;
      font-family: Arial, Helvetica, sans-serif;
    "
  >
    <table
      role="presentation"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      style="background-color: #f8fafc; padding: 40px 0"
    >
      <tr>
        <td align="center">
          <table
            role="presentation"
            width="560"
            cellpadding="0"
            cellspacing="0"
            style="background-color: #ffffff; overflow: hidden"
          >
            <tr>
              <td
                style="
                  background-color: #0a4460;
                  padding: 22px;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <img src="./logo1.png" alt="#" />
                <h1
                  style="
                    color: #eaebff;
                    margin: 0;
                    font-weight: 500;
                    font-size: 14px;
                  "
                >
                  Maturity Model Assesment
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px">
                <p style="font-size: 16px; color: #334155; margin: 0 0 16px">
                  Beste deelnemer,
                </p>
                <p style="font-size: 16px; color: #334155; margin: 0 0 16px">
                  Bedankt voor uw interesse in de CM Partners Maturity Model
                  Assessment. Klik op de onderstaande knop om uw persoonlijke
                  vragenlijst te openen.
                </p>
                <p style="font-size: 16px; color: #334155; margin: 0 0 24px">
                  De beoordeling duurt ongeveer 10 minuten. Na voltooiing
                  ontvangt u uw volwassenheidsscore en aanbevelingen op maat.
                </p>
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background-color: #d4006a; border-radius: 5px">
                      <a
                        href="${testUrl}"
                        style="
                          display: inline-block;
                          padding: 12px 82px;
                          color: #ffffff;
                          text-decoration: none;
                          font-size: 14px;
                          font-weight: 600;
                        "
                      >
                        Beoordeling starten
                      </a>
                    </td>
                  </tr>
                </table>
                <p
                  style="
                    font-size: 14px;
                    color: #94a3b8;
                    margin: 24px 0 0;
                    text-align: center;
                  "
                >
                  Deze link is persoonlijk en uniek — deel hem alstublieft niet.
                </p>
              </td>
            </tr>
            <tr>
              <td
                style="
                  padding: 16px 32px;
                  background-color: #f1f5f9;
                  text-align: center;
                "
              >
                <p style="font-size: 12px; color: #94a3b8; margin: 0">
                  &copy; ${new Date().getFullYear()} CM Partners · Utrecht,
                  Netherlands
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
    };
}
