import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({});
const bucket = process.env.BUCKET_NAME;

export const handler = async (event) => {
  console.log("Incoming Event:", JSON.stringify(event));

  const requestPath = event.rawPath || event.path || "/";

  let key = requestPath === "/" ? "index.html" : requestPath.substring(1);

  console.log("Request Path:", requestPath);
  console.log("S3 Key:", key);

  try {
    let response;

    try {
      response = await s3.send(
        new GetObjectCommand({
          Bucket: bucket,
          Key: key,
        })
      );
    } catch (err) {
      // BrowserRouter fallback
      if (
        err.name === "NoSuchKey" ||
        err.Code === "NoSuchKey" ||
        err.$metadata?.httpStatusCode === 404
      ) {
        console.log("File not found, returning index.html");
        response = await s3.send(
          new GetObjectCommand({
            Bucket: bucket,
            Key: "index.html",
          })
        );
      } else {
        throw err;
      }
    }

    const body = await response.Body.transformToString();

    return {
      statusCode: 200,
      statusDescription: "200 OK",
      isBase64Encoded: false,
      headers: {
        "Content-Type": response.ContentType || "text/html",
        "Cache-Control": "no-cache",
      },
      body,
    };
  } catch (err) {
    console.error("Lambda Error:", err);

    return {
      statusCode: 500,
      statusDescription: "500 Internal Server Error",
      isBase64Encoded: false,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }
};