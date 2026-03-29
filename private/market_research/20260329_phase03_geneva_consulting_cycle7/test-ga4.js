const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const credentials = require('./research/private/.credentials/ga4-service-account.json');

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: credentials
});

async function runReport() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${process.env.GA4_PROPERTY_ID}`,
    dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'country' }],
    metrics: [{ name: 'activeUsers' }]
  });
  console.log(JSON.stringify(response, null, 2));
}

runReport().catch(console.error);
