require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remain hospital idea knife flush spread'; 
let testAccounts = [
"0x27965a455de3b7e98dc623973f566415ec791fb7f609de295a0751858a142e08",
"0x000d7e4974dd183f851ba1994b2cf5ee3458f6dc9e22192705e9507a9b17c3d8",
"0x7f3dd69f0ae5e531f0424a5623bade6ef35e992ace0e132a2fbbb17ef4b6b5a6",
"0x8cb7a3fd1bcd7e6fb66fd6f89148b2d4455cb1daaed131a31f8c3ec7517d55ea",
"0x0ee1ca9827eb3cf1e3a0a5632f2e46cf4ff27f02d8b30ba33befa9e5c2e7d03b",
"0xa822710dcb940a0f6231a4334f5d6d3201a166b4b573e54e7acd909f189f6bc8",
"0x80426b0f998399bec7f7829210f3f926af4c10709059bf410ab22564eac2e5ce",
"0x2486dba84039dbaa002524193ee7b7b1518f66b794a84fd243ad1a9994ca6973",
"0x424b5b6b8fcc0984b816f76fc3dc7ff1221882c1cdf8ed22178b38d49326b257",
"0x7b783334f37a6e422f7e2a5b022f80c7e02789d81d33c24e4314d481a6c529c6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
