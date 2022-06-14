const defaultEnv = process.env.NEAR_ENV || 'testnet';

export default function getConfig(env: string = defaultEnv) {
  switch (env) {
    case 'mainnet':
      return {
        networkId: 'mainnet',
        nodeUrl: 'https://rpc.mainnet.near.org',
        walletUrl: 'https://wallet.near.org',
        helperUrl: 'https://helper.mainnet.near.org',
        explorerUrl: 'https://explorer.mainnet.near.org',
        indexerUrl: 'https://indexer.ref-finance.net/',
        LOCKUP_CONTRACT_ID: 'lockup.pembrock.near',
        TOKEN_CONTRACT_ID: 'token.pembrock.near',
        REF_FI_CONTRACT_ID: 'v2.ref-finance.near',
        TREASURY_PEM_CONTRACT: 'treasury.pembrock.near',
        REF_POOL_TOKEN: [
          '3449',
          '3448',
          '3461',
          '3470',
          '3471',
          '3472',
          '3462',
        ],
        headers: {},
      };
    default:
      return {
        networkId: 'testnet',
        nodeUrl: 'https://rpc.testnet.near.org',
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
        explorerUrl: 'https://explorer.testnet.near.org',
        indexerUrl: 'https://indexer.ref-finance.net/',
        LOCKUP_CONTRACT_ID: 'lookup.pembrock.testnet',
        TOKEN_CONTRACT_ID: 'token.pembrock.testnet',
        REF_FI_CONTRACT_ID: 'ref-finance-101.testnet',
        TREASURY_PEM_CONTRACT: 'treasury.pembrock.testnet',
        REF_POOL_TOKEN: ['461', '462'],
        headers: {},
      };
  }
}
