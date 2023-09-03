# Nostr Schnorr

Demo application for signing Nostr events using Schnorr signatures. Don't use this for anything serious.

## Installation

```sh
npm install
```

## Usage
The application reads your secret key from the `key.json` file. The key is expected to be a compressed `secp256k1` key in BIP-340 format. The `key.json` file is must have the format

```json
{
  "secretKey": ""
}
```

Then run

```sh
NOSTR_EVENT_ID=4376c65d2f232afbe9b882a35baa4f6fe8667c4e684749af565f981833ed6a65 node main.js
```

substituting `NOSTR_EVENT_ID` with your own id.