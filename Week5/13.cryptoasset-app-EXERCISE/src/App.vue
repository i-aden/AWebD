<!--
1. Make a home page that has the following cryptoassets as clickable links:
                Bitcoin		id = bitcoin
                Cardano		id = cardano
                Dash		id = dash
                Ethereum	id = Ethereum
                Zcash		id = zcash

2. When any of the cryptoassets is clicked, open another page with the following as clickable links:
    1. Name, price, marketcap, totalvolume and homepage
    2. Markets: Get current data (name, price, market, ... including exchange tickers) for a coin.
    3. Tickers
    4. Market Chart
    5. Range: Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)
    6. Status Updates

3. When each link in item (2) above is clicked, display the relevant information by fetching the 
   information using CoinGecko’s API.

Use a composable to fetch the data.

Display the results appropriately.

Personalise and style your app and its pages.
-->
<template>
  <div></div>  
</template>

<script>
import { ref } from "vue";
import getCoinData from "./composables/getCoinData";

const coins = ref(["bitcoin", "cardano", "dash", "ethereum", "zcash"]);

const coingecko_base_url = "https://api.coingecko.com/api/v3";

const { coinData, error, fetchCoinData } = getCoinData();
</script>

<style>

</style>
