import { Handler } from 'aws-lambda';

export const run: Handler = (event: any, context: any) => {
  const time = new Date()
  console.log(`Your cron function "${context.functionName}" ran at ${time}`)

  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: 'Go Serverless v1.0! Your function executed successfully!',
  //       input: event,
  //     },
  //     null,
  //     2
  //   ),
  // };
  //
  // return new Promise((resolve) => {
  //   resolve(response)
  // })
}