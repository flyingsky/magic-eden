const LIST_URL =
  "https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol";

const buildUrl = (symbol, limit, offset) =>
  `${LIST_URL}?collectionSymbol=${symbol}&limit={limit}&offset={offset}`;

export function getNftList(symbol, limit, offset) {
  return fetch(buildUrl(symbol, limit, offset)).then((response) =>
    response.json()
  );
}

export function getNftListFake(symbol, limit, offset) {
  // Always assusming limit 20
  const pageIndex = offset / 20;
  const results = pages[pageIndex] ? pages[pageIndex].results : [];
  return Promise.resolve(results);
}

const pages = [
  {
    results: [
      {
        mintAddress: "zoKpfnxtHPehdTTFGxE6HnyF1mPaLPw1owTSy3fHJsa",
        supply: 1,
        title: "Okay Bear #1917",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 124,
        escrowPubkey: "7RXry78X7hLtn16H4EENapRhMLNKSvEHjRx6rZJjBQNx",
        owner: "7Ciqa4aSaMnkWXv22RQJen8wnXEeHXhhtbUZeaT2ezVy",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "2FStpdNKX7CHCCHYJ3T6gZAsPMrRVZVb3ZvpM4T1hsQd",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/rO6eLwXD5dTQNWngf5Jx7rPIuuUdHw_KXbrWP5rL1z0",
        attributes: [
          { trait_type: "Background", value: "Warm Grey" },
          { trait_type: "Fur", value: "Panda" },
          { trait_type: "Mouth", value: "Huh" },
          { trait_type: "Eyes", value: "Spirited" },
          { trait_type: "Hat", value: "Army Hat" },
          { trait_type: "Clothes", value: "Tweed Suit" },
          { trait_type: "Eyewear", value: "Round Glasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 185, absolute_rarity: 185, crawl: {} },
          merarity: {
            rank: 185,
            tokenKey: "zoKpfnxtHPehdTTFGxE6HnyF1mPaLPw1owTSy3fHJsa",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T08:43:22.100Z",
        updatedAt: "2023-05-06T08:43:22.100Z"
      },
      {
        mintAddress: "zmgsJaQ2HYMtaoS7GFdk3a1rUwekHkfVpmfrHZo7r93",
        supply: 1,
        title: "Okay Bear #114",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 420,
        escrowPubkey: "Ca5m5EcaZueU7sqbUASBFjQFRvozWRJHxgDGgCSd9Tgq",
        owner: "4YLwmwBfj4xk7TTGR2H2Jmx8qyVWY17hgwmaUvAYYcSB",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "4y1qRSVpkthuAkmNK3J9LzZvK6oeZY9yyxj4WNvzxc55",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/lvX28kAjjh0-uLTAQwuzMx541Nn8Nbry6rPYvZfc4ow",
        attributes: [
          { trait_type: "Background", value: "Cream" },
          { trait_type: "Fur", value: "Sand" },
          { trait_type: "Mouth", value: "Pouting" },
          { trait_type: "Eyes", value: "Spirited" },
          { trait_type: "Hat", value: "Beret" },
          { trait_type: "Clothes", value: "Hoodie with Headphones" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 6248, absolute_rarity: 6248, crawl: {} },
          merarity: {
            rank: 6248,
            tokenKey: "zmgsJaQ2HYMtaoS7GFdk3a1rUwekHkfVpmfrHZo7r93",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T01:46:20.753Z",
        updatedAt: "2023-05-07T01:46:20.753Z"
      },
      {
        mintAddress: "xWYboPywpkySNthEKvmZi3t4T1ovaq7FAu48CG626Sy",
        supply: 1,
        title: "Okay Bear #9377",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 69,
        escrowPubkey: "fN21FstSvTzGJhtpVpJcqyfcEnpeHXqbe9RKN9huSHw",
        owner: "FRcfhfbffT6qyHwQRWAJAK2PoiEQS9AEgURtXrbYexUB",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "4mnhHwinzNusrGBjGUWQcc5LkWEAMZTpXCRPsaSxvBJY",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/R4xXx8qHssrhHWS7LOrnKzmojjbBY6ed3zvabR2VETM",
        attributes: [
          { trait_type: "Background", value: "Cream" },
          { trait_type: "Fur", value: "Ginger" },
          { trait_type: "Mouth", value: "Huh" },
          { trait_type: "Eyes", value: "Tired" },
          { trait_type: "Hat", value: "Surf Bucket Hat" },
          { trait_type: "Clothes", value: "Torn Sleeveless Tee" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 2770, absolute_rarity: 2770, crawl: {} },
          merarity: {
            rank: 2770,
            tokenKey: "xWYboPywpkySNthEKvmZi3t4T1ovaq7FAu48CG626Sy",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T22:29:36.009Z",
        updatedAt: "2023-05-07T22:29:36.009Z"
      },
      {
        mintAddress: "xqJortFgUmvbCt5UdgxnfQLoqtnuXVJydu9VCuE96rF",
        supply: 1,
        title: "Okay Bear #6137",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 696,
        escrowPubkey: "fWFcW5gHC1ufusWQdCwAuCFZXi1bjP59gNqHWxJ7mX2",
        owner: "Boztjqq31QNmkoq7nzk5ASH9kGY3reKmdUQcWCcWFc12",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "GPafP2LXyRYmXVgEXFNRtNkFvNHpkJjCAX3gSpXjUNDf",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/S-X_Z577GDpjoPrSfdg9ZOUyog9Mlb3NZNL2MTcDaz8",
        attributes: [
          { trait_type: "Background", value: "Purple" },
          { trait_type: "Fur", value: "Tan" },
          { trait_type: "Mouth", value: "Pouting" },
          { trait_type: "Eyes", value: "Okay" },
          { trait_type: "Hat", value: "Bandana" },
          { trait_type: "Clothes", value: "Camel Coat" },
          { trait_type: "Eyewear", value: "Pixel Glasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 3612, absolute_rarity: 3612, crawl: {} },
          merarity: {
            rank: 3612,
            tokenKey: "xqJortFgUmvbCt5UdgxnfQLoqtnuXVJydu9VCuE96rF",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T22:30:03.276Z",
        updatedAt: "2023-05-07T22:30:03.276Z"
      },
      {
        mintAddress: "WPGns1euhHpXBrUzH6Yd2kKpxVXT93GHx9EfXRoNB7E",
        supply: 1,
        title: "Okay Bear #2969",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 200,
        escrowPubkey: "3hKRxik3t58WGsWMzXrCNDjeL7o7HeBx3PgaNey9xjqA",
        owner: "H3AkHZHfcqGCcJpBn3FJWe52LcLxFMJQoZvZ6XyApFWf",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "6DgMhWcLnJjD24fFzF2nDgXXDfUV5VWhbVMB8pQdG3Zg",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/Zl5PKHcH2odZ6e7KO60vsMjMcdtySHcZyO9ubrW9wI0",
        attributes: [
          { trait_type: "Background", value: "Green" },
          { trait_type: "Fur", value: "Blueprint" },
          { trait_type: "Mouth", value: "Pouting" },
          { trait_type: "Eyes", value: "Happy" },
          { trait_type: "Hat", value: "Skate Cap" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 8082, absolute_rarity: 8082, crawl: {} },
          merarity: {
            rank: 8082,
            tokenKey: "WPGns1euhHpXBrUzH6Yd2kKpxVXT93GHx9EfXRoNB7E",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-08T05:16:25.176Z",
        updatedAt: "2023-05-08T05:16:25.176Z"
      },
      {
        mintAddress: "Vt5bHS1N98ZKt4dLUdzT7HYLkjRbPm367fD42zQzjGL",
        supply: 1,
        title: "Okay Bear #7921",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 115,
        escrowPubkey: "DMM3K4aRVrpYXemBhtc5HzNQD8SfVrBioopbo5aLkx8X",
        owner: "4YnkZK6Ludj5GgLML8VjH8oNTHUsQ5FsGw11TSjf3HL6",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "2xARUr4GucmLe1DSuyLz7J6W8ymE6deMmMfQvx293L6c",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/yF7TpEUVOVwtseprvcPBn9lfbztkSXQrCefBVSU2sE4",
        attributes: [
          { trait_type: "Background", value: "Grey" },
          { trait_type: "Fur", value: "Green" },
          { trait_type: "Mouth", value: "Huh" },
          { trait_type: "Eyes", value: "Interested" },
          { trait_type: "Hat", value: "Bandana" },
          { trait_type: "Clothes", value: "Sleeveless Tee" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 4311, absolute_rarity: 4311, crawl: {} },
          merarity: {
            rank: 4311,
            tokenKey: "Vt5bHS1N98ZKt4dLUdzT7HYLkjRbPm367fD42zQzjGL",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T04:18:29.876Z",
        updatedAt: "2023-05-07T04:18:29.876Z"
      },
      {
        mintAddress: "VqtC1UNok7LrNdxgjU1gMuRqhUxRZciqWKo1ExdtHMb",
        supply: 1,
        title: "Okay Bear #2719",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 88,
        escrowPubkey: "3TbCTuAdc2HuK1Tt3aJCyenh4cSDMRUtE7XJtRppXMny",
        owner: "5HSG8E8uGYDMsDmypEjbgZ2y4Kd8X1FHJcKqhKoUbMJQ",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "5nHF3mh7mQc7ndujMpGC2vVy5iQPjtwxiD4i3N47KhDj",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/1D8rvnpP0BZ2t_X_Nu-sg2a3pm0NgGwTanVFgeXZv8M",
        attributes: [
          { trait_type: "Background", value: "Blue" },
          { trait_type: "Fur", value: "Dark Brown" },
          { trait_type: "Mouth", value: "Raspberry" },
          { trait_type: "Eyes", value: "Annoyed" },
          { trait_type: "Hat", value: "Chullo" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 6836, absolute_rarity: 6836, crawl: {} },
          merarity: {
            rank: 6836,
            tokenKey: "VqtC1UNok7LrNdxgjU1gMuRqhUxRZciqWKo1ExdtHMb",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-08T04:28:42.120Z",
        updatedAt: "2023-05-08T04:28:42.120Z"
      },
      {
        mintAddress: "V65R7FFVVd54BoK5FHQSxwU69LuFpHNLvaa73NTiKbt",
        supply: 1,
        title: "Okay Bear #2688",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 86,
        escrowPubkey: "AgNPCWj8CEY5WsbFp1vv9oBGEENodm1eSbVcWxMB8CUH",
        owner: "4WWWv8u68MCndnua4dYcGusC5RNPmQjiMNhBWGmLwr7R",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "4YuLYqxLpAzoRztJrjY7LNWRaH3DJWzmBa3XVL85r4S2",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/gMlUzuifCQ_Un2BGQDmGNrCqyaaIW7W2ZEoDmNVV7b4",
        attributes: [
          { trait_type: "Background", value: "Purple" },
          { trait_type: "Fur", value: "Grizzly" },
          { trait_type: "Mouth", value: "Raspberry" },
          { trait_type: "Eyes", value: "Wide Eyed" },
          { trait_type: "Hat", value: "Bandana" },
          { trait_type: "Clothes", value: "Utility Vest" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 3532, absolute_rarity: 3532, crawl: {} },
          merarity: {
            rank: 3532,
            tokenKey: "V65R7FFVVd54BoK5FHQSxwU69LuFpHNLvaa73NTiKbt",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T19:32:07.989Z",
        updatedAt: "2023-05-06T19:32:07.989Z"
      },
      {
        mintAddress: "SzCKeZMaLWW7zHfp21Me3JiLM8gJmK5DAbb7DXFK3wC",
        supply: 1,
        title: "Okay Bear #1468",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 120,
        escrowPubkey: "3WEtyPMzYn7msGKbXbt3BDzP83ATdg8JoUrsXc8CaJXL",
        owner: "AyYa1NUgnaSUjK2AKgmMv4KjxBuHf272uqam3TW6KyRy",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "9gcvFVZp8WNzH4j9oR87WNHevxyaqAUybYRGvQ5Um8Pc",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/0-yM76iFAkE-ONTE3U-Vqv5oiHYy9epTWHpM2OWKja8",
        attributes: [
          { trait_type: "Background", value: "White" },
          { trait_type: "Fur", value: "Dark Brown" },
          { trait_type: "Mouth", value: "Pouting" },
          { trait_type: "Eyes", value: "Interested" },
          { trait_type: "Hat", value: "Backwards Flat Cap" },
          { trait_type: "Eyewear", value: "Punk Sunglasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 5399, absolute_rarity: 5399, crawl: {} },
          merarity: {
            rank: 5399,
            tokenKey: "SzCKeZMaLWW7zHfp21Me3JiLM8gJmK5DAbb7DXFK3wC",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-08T04:37:55.524Z",
        updatedAt: "2023-05-08T04:37:55.524Z"
      },
      {
        mintAddress: "SWWkv7cHpUCv4F5H8cde33JP7Umj4V7kJXakdf5E7g8",
        supply: 1,
        title: "Okay Bear #3808",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 222,
        escrowPubkey: "2pzDgQcY5UmTot1HaWArNZF9CbBuPSaVjTjc7ZfqpFQr",
        owner: "56QYg8LN2f2YfYrZHN4QjwQ1jhvaqK6TvmMupqFEpSbA",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "AnEGyeBWeaEetUxqTmCkEDvQwML2Vj51bKaJrYtgQYAb",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/fdxz7ex9JAofBCRt1UolLAswa8C3maBAXcexWsLF1kQ",
        attributes: [
          { trait_type: "Background", value: "Green" },
          { trait_type: "Fur", value: "Grizzly" },
          { trait_type: "Mouth", value: "Clean Smile" },
          { trait_type: "Eyes", value: "Sarcastic" },
          { trait_type: "Hat", value: "Visor" },
          { trait_type: "Clothes", value: "Double Jacket" },
          { trait_type: "Eyewear", value: "Aviator Sunglasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 3091, absolute_rarity: 3091, crawl: {} },
          merarity: {
            rank: 3091,
            tokenKey: "SWWkv7cHpUCv4F5H8cde33JP7Umj4V7kJXakdf5E7g8",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-08T02:24:16.213Z",
        updatedAt: "2023-05-08T02:24:16.213Z"
      },
      {
        mintAddress: "ScRgmrzmARKaykZnjKuJCsBGSUZhhGncjZusaKZWRki",
        supply: 1,
        title: "Okay Bear #3639",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 197,
        escrowPubkey: "9tiePAC89QJYfNrEZ6Jvu7ywM9gfVazWjFZHKMdJKABU",
        owner: "FZPgou9GJcq4BkkBrNk2Wj3s2P9qB5qRi5nvVHh663Eq",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "JDSoLGHcwCx97YZQxnic4CnAVvu9CZhwXjCbLs8gYJmR",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/BTEzU7htT64ALvU_rpIFJKxEJVXVpgX1QIvzVKLpUs4",
        attributes: [
          { trait_type: "Background", value: "Yellow" },
          { trait_type: "Fur", value: "Dark Brown" },
          { trait_type: "Mouth", value: "Oou" },
          { trait_type: "Eyes", value: "Okay" },
          { trait_type: "Clothes", value: "Lumber Jacket" },
          { trait_type: "Eyewear", value: "Clear Glasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 4442, absolute_rarity: 4442, crawl: {} },
          merarity: {
            rank: 4442,
            tokenKey: "ScRgmrzmARKaykZnjKuJCsBGSUZhhGncjZusaKZWRki",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T16:56:20.522Z",
        updatedAt: "2023-05-06T16:56:20.522Z"
      },
      {
        mintAddress: "SaUXeDSyCeXCmLfFa6JHu9KgMXSYfx7BWDsKDKckDFp",
        supply: 1,
        title: "Okay Bear #5411",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 98.9,
        escrowPubkey: "Fpa72NRToqzANguiPP5n9YSepQPRzNBjjtfG11GYf2Uw",
        owner: "8e6rpi4VtAKvxTudxHzQnm1GTsbarddRVYhCS9DZ2oDK",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "UqmXw7BEecKnHzNKDxsnW81k1xsUPnoZBGYoP6bfubt",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/9G11JWYCO1sJhymqwTDBuIDIgmDhNpe6zQWjbfZVG5c",
        attributes: [
          { trait_type: "Background", value: "Yellow" },
          { trait_type: "Fur", value: "Grizzly" },
          { trait_type: "Mouth", value: "Okay" },
          { trait_type: "Eyes", value: "Okay" },
          { trait_type: "Hat", value: "Surf Bucket Hat" },
          { trait_type: "Clothes", value: "Autumn Sweater" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 7978, absolute_rarity: 7978, crawl: {} },
          merarity: {
            rank: 7978,
            tokenKey: "SaUXeDSyCeXCmLfFa6JHu9KgMXSYfx7BWDsKDKckDFp",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T12:18:43.930Z",
        updatedAt: "2023-05-07T12:18:43.930Z"
      },
      {
        mintAddress: "s7HEYkahded2v2oB6r1jXGRK5HoVQfhYh6VqGnqRNgm",
        supply: 1,
        title: "Okay Bear #3370",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 78,
        escrowPubkey: "CDkfagRiyJiCCHcJZb4BPrx5C7zP3FkSDKgrKcPLrJEr",
        owner: "6h26duYa5LawrYgjP372e5A9V7zAkDSZEBuDi8wcwJiM",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "FsVtZGv5wKnuxLVjGzpAbWRPWH6sSbiSdRTGTUPz4YHt",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/n1EjGpG-3dsuqG8GkAfHxgP5t3I80IlFzY-rzf0QJKU",
        attributes: [
          { trait_type: "Background", value: "Green" },
          { trait_type: "Fur", value: "Grizzly" },
          { trait_type: "Mouth", value: "Pouting" },
          { trait_type: "Eyes", value: "Sarcastic" },
          { trait_type: "Hat", value: "Black Bucket Hat" },
          { trait_type: "Clothes", value: "Striped Tee" },
          { trait_type: "Eyewear", value: "Barrel Sunglasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 3633, absolute_rarity: 3633, crawl: {} },
          merarity: {
            rank: 3633,
            tokenKey: "s7HEYkahded2v2oB6r1jXGRK5HoVQfhYh6VqGnqRNgm",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T00:37:06.639Z",
        updatedAt: "2023-05-07T00:37:06.639Z"
      },
      {
        mintAddress: "Qs4v1R4DCsSJ8pdeoKZPs8CR916VpsBpDprTepwnt2K",
        supply: 1,
        title: "Okay Bear #7783",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 90,
        escrowPubkey: "DCvRCrKAq9Sq3EnCzu5M6L76xkzsPdTV5DkMGQygTEHc",
        owner: "H3AkHZHfcqGCcJpBn3FJWe52LcLxFMJQoZvZ6XyApFWf",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "56uNMDFhQkFCB9Jik4RcdQCoUtW45QxCMcvvo5mYeq3w",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/UvEz1KSv2zFs2mYCcdapqy3NBjeFwfdHU0nQU4AW9AY",
        attributes: [
          { trait_type: "Background", value: "Purple" },
          { trait_type: "Fur", value: "Grizzly" },
          { trait_type: "Mouth", value: "Okay" },
          { trait_type: "Eyes", value: "Okay" },
          { trait_type: "Hat", value: "Mumford Hat" },
          { trait_type: "Clothes", value: "Loose Overalls" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 8650, absolute_rarity: 8650, crawl: {} },
          merarity: {
            rank: 8650,
            tokenKey: "Qs4v1R4DCsSJ8pdeoKZPs8CR916VpsBpDprTepwnt2K",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T03:50:30.456Z",
        updatedAt: "2023-05-07T03:50:30.456Z"
      },
      {
        mintAddress: "nRe76vspaGKy8AzjYSoDy5J8Ci5VoDwskzstZQ2P9mV",
        supply: 1,
        title: "Okay Bear #6704",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 150,
        escrowPubkey: "3SXkqeUDwUKi6K4mXPCBuP5Wn8rvDVGdM8qjL9Zx472s",
        owner: "nWfYHod6UzDfboThs6Sn5FpUsJzTQnZKx54KxS8YeA4",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "7ftkF6WSDjZwKy6zG1UbiXjfPNWtn5vLtu5U1Y2oCc77",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/ZN1dcQD6Qx5NbVkUKaPYyt4FfUtxQ7vYnhpPcLi0ajw",
        attributes: [
          { trait_type: "Background", value: "Green" },
          { trait_type: "Fur", value: "Albino" },
          { trait_type: "Mouth", value: "Wry" },
          { trait_type: "Eyes", value: "White Glow" },
          { trait_type: "Hat", value: "Classic Cap" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 7405, absolute_rarity: 7405, crawl: {} },
          merarity: {
            rank: 7405,
            tokenKey: "nRe76vspaGKy8AzjYSoDy5J8Ci5VoDwskzstZQ2P9mV",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-08T04:24:53.053Z",
        updatedAt: "2023-05-08T04:24:53.053Z"
      },
      {
        mintAddress: "kfc8WSC72DXxGCsubHhnb8PJrsZoAqnAmBmHxeVLaM7",
        supply: 1,
        title: "Okay Bear #2355",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 120,
        escrowPubkey: "7SUkFph5uGkGtdF5tx42Dac2jevSdVXbS3DfjoF4FHpQ",
        owner: "B52HB3siuejkhiwGr4cNkoP83BAEB3xBe5n4WQLanwGH",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "2VoHSXUJ2wjRQgLdLHttwbJN2KSrouo9D2WWVuH52ana",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/9GsqKzhr9IsQJ9JhGZ7owTuIjul9WjgqpEMWwEUG8ts",
        attributes: [
          { trait_type: "Background", value: "Green" },
          { trait_type: "Fur", value: "Albino" },
          { trait_type: "Mouth", value: "Wry" },
          { trait_type: "Eyes", value: "Sarcastic" },
          { trait_type: "Hat", value: "Sticky Note" },
          { trait_type: "Clothes", value: "Striped Tee" },
          { trait_type: "Eyewear", value: "Clear Glasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 1904, absolute_rarity: 1904, crawl: {} },
          merarity: {
            rank: 1904,
            tokenKey: "kfc8WSC72DXxGCsubHhnb8PJrsZoAqnAmBmHxeVLaM7",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T08:46:34.452Z",
        updatedAt: "2023-05-06T08:46:34.452Z"
      },
      {
        mintAddress: "JDSmH3iBM4wNqbZMQYzizSnUtNJAkPdFrtyPfXVJvr9c",
        supply: 1,
        title: "Okay Bear #5483",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 699,
        escrowPubkey: "BrWjBs9N6ZW1Vkvg6x5fAApxiiqbkBAASbKHbSGn29kX",
        owner: "DZs3JX5bp3tePjQrRJCRjaKCM9UWTYsLnGWkPGshhj3V",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "DNBV1R1Lvewg95tDuoiGYhTUKBj3CB85MDyv9tGHZEcd",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/vPTaQGfpWCiaTp6SXtdDsu2I-mjKiPB2pcCWwJPptk0",
        attributes: [
          { trait_type: "Background", value: "Green" },
          { trait_type: "Fur", value: "Dark Brown" },
          { trait_type: "Mouth", value: "Bubble Gum" },
          { trait_type: "Eyes", value: "Sarcastic" },
          { trait_type: "Hat", value: "Visor" },
          { trait_type: "Clothes", value: "Torn Sleeveless Tee" },
          { trait_type: "Eyewear", value: "Punk Sunglasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 757, absolute_rarity: 757, crawl: {} },
          merarity: {
            rank: 757,
            tokenKey: "JDSmH3iBM4wNqbZMQYzizSnUtNJAkPdFrtyPfXVJvr9c",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T23:25:10.976Z",
        updatedAt: "2023-05-06T23:25:10.976Z"
      },
      {
        mintAddress: "JDoP7X5PjDD7h9GgU5AVwwR8SKA7fyY9QYF7jLvAPCns",
        supply: 1,
        title: "Okay Bear #8023",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 333,
        escrowPubkey: "95h46HQKFk7VdiucQCN3t5nqLfjLJk9vjASLstNpV14f",
        owner: "G27MuUDEMPCSqwV4cgnXBHWUwoP1XRhh7UchagyL3YMe",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "94KhXcrpNQnp7kxPWpgE93Y2C4zaSSKB3D7Xr697fDDi",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/-kukNCQ1aTavo_9XNIYfyvHYX_nRpNz7_FeFenjQAHE",
        attributes: [
          { trait_type: "Background", value: "White" },
          { trait_type: "Fur", value: "Blueprint" },
          { trait_type: "Mouth", value: "Hmm" },
          { trait_type: "Eyes", value: "Golden Glow" },
          { trait_type: "Hat", value: "Skate Cap" },
          { trait_type: "Clothes", value: "Hooded Cardigan" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 1104, absolute_rarity: 1104, crawl: {} },
          merarity: {
            rank: 1104,
            tokenKey: "JDoP7X5PjDD7h9GgU5AVwwR8SKA7fyY9QYF7jLvAPCns",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T14:13:39.001Z",
        updatedAt: "2023-05-06T14:13:39.001Z"
      },
      {
        mintAddress: "JCaZsN4jFzktcZkC5fp5rzcPK8ArHUj2z5SrUArK6yvg",
        supply: 1,
        title: "Okay Bear #4498",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 89,
        escrowPubkey: "H1V7tSmLomwijsKXqgYuxkZ4oDBrNUu3c2asmwCVwqbT",
        owner: "H3AkHZHfcqGCcJpBn3FJWe52LcLxFMJQoZvZ6XyApFWf",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "2f7i5HEUTwquA3X8rqztaHyAuHZNmTrd9GDe2WK7SV9R",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/SBDA5mGbHzL0PhKR0ZsiuUA7SvX4TlAzy5449Yr3v_g",
        attributes: [
          { trait_type: "Background", value: "Grey" },
          { trait_type: "Fur", value: "Grizzly" },
          { trait_type: "Mouth", value: "Wry" },
          { trait_type: "Eyes", value: "Okay" },
          { trait_type: "Hat", value: "Sweatband" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 9718, absolute_rarity: 9718, crawl: {} },
          merarity: {
            rank: 9718,
            tokenKey: "JCaZsN4jFzktcZkC5fp5rzcPK8ArHUj2z5SrUArK6yvg",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T16:12:44.569Z",
        updatedAt: "2023-05-07T16:12:44.569Z"
      },
      {
        mintAddress: "JC2ikH5j2bQahZ6GgPnVsnmMWU4914r4K99JpMRRr8K6",
        supply: 1,
        title: "Okay Bear #8188",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 350,
        escrowPubkey: "9a4TwWzB4fzf8HuzCrPkQB2Xy7oaU9zYpcjheRPnKcVq",
        owner: "YFeM44nVTVocaZ7FUCs3kEN18zrP5CyoFGTYYfT8mse",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "2gjDp4X36TvShYYQusMDnrotVzwzngoaU2aWBPGsB9S5",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/LnJ0dCaOgSSqiDV6HPqo5Jr6R2TjzK0tnROJ6AB6Fa0",
        attributes: [
          { trait_type: "Background", value: "Purple" },
          { trait_type: "Fur", value: "Andean" },
          { trait_type: "Mouth", value: "Wheat" },
          { trait_type: "Eyes", value: "Closed" },
          { trait_type: "Hat", value: "Earrings" },
          { trait_type: "Clothes", value: "Loose Overalls" },
          { trait_type: "Eyewear", value: "Wayfarer Sunglasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 218, absolute_rarity: 218, crawl: {} },
          merarity: {
            rank: 218,
            tokenKey: "JC2ikH5j2bQahZ6GgPnVsnmMWU4914r4K99JpMRRr8K6",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T15:52:07.242Z",
        updatedAt: "2023-05-06T15:52:07.242Z"
      }
    ]
  },
  {
    results: [
      {
        mintAddress: "J7zf1Z9qD9FZgGmgoapHFvWQx9CXSKXKxeWNiJPBsRGv",
        supply: 1,
        title: "Okay Bear #599",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 2000,
        escrowPubkey: "CC4xCuPKKHn4yCw83hbbVubEBWKSTWmvF8xZ292h5cyG",
        owner: "E1P849pXgy7Pkjms8q9XYATajtr6rH7EFf3vQw8wbhMV",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "3e9jGNW1No9fTXcmpDzjqLAgH2LDPRnKUsFgvrPkeMNN",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/6YWpG4n_2XIvX8LXROCg7r2URfWBdGZciCSHGDnrYJY",
        attributes: [
          { trait_type: "Background", value: "Green" },
          { trait_type: "Fur", value: "Tan" },
          { trait_type: "Mouth", value: "Cassette" },
          { trait_type: "Eyes", value: "Okay" },
          { trait_type: "Clothes", value: "Puffer Jacket" },
          { trait_type: "Eyewear", value: "Circle Sunglasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 1809, absolute_rarity: 1809, crawl: {} },
          merarity: {
            rank: 1809,
            tokenKey: "J7zf1Z9qD9FZgGmgoapHFvWQx9CXSKXKxeWNiJPBsRGv",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T00:31:27.687Z",
        updatedAt: "2023-05-07T00:31:27.687Z"
      },
      {
        mintAddress: "J6oMoLD4JhrB8f4hXfDg8Lxn6dt6WqE9BpfvWzN9xwoV",
        supply: 1,
        title: "Okay Bear #1674",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 79.95,
        escrowPubkey: "6fRQ4oP5CpcxWLTHTaGPJi9KYSc1XGDKEyJc6GYqGy6M",
        owner: "HFE5NcQT5TKG2vYnPyCRxwLmG3UgL8Ayu8yCYko2gstk",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "Fu45fs87htd7g8bhwViHqyXF9cCeSGyHZWTcGsAmqpPm",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/WdQcqpcQb-C1GNt0FUYl2zvkCo_4tgzwdeOaImYK9hU",
        attributes: [
          { trait_type: "Background", value: "White" },
          { trait_type: "Fur", value: "Red Panda" },
          { trait_type: "Mouth", value: "Okay" },
          { trait_type: "Eyes", value: "Sarcastic" },
          { trait_type: "Hat", value: "Head Cam" },
          { trait_type: "Clothes", value: "Faded Denim Jacket" },
          { trait_type: "Eyewear", value: "Circle Sunglasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 1009, absolute_rarity: 1009, crawl: {} },
          merarity: {
            rank: 1009,
            tokenKey: "J6oMoLD4JhrB8f4hXfDg8Lxn6dt6WqE9BpfvWzN9xwoV",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T15:39:32.960Z",
        updatedAt: "2023-05-07T15:39:32.960Z"
      },
      {
        mintAddress: "J62TMTBfe9rqQ1TxwEx58JGfLGktyDVBDMoiQTPmyPmm",
        supply: 1,
        title: "Okay Bear #4245",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 90,
        escrowPubkey: "5EfbmU5gtVqgbJFAk1ru4PiDTPxiPNoDtSju9m1rysTt",
        owner: "CjfTtCxTXXaG6vByRwAEaYBKkqEiW1SLQPWZC8j4faL5",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "8rRGXEw5p5TrkrqzgYYVfhWpFYurDScpi6Q3tU1ddC45",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/mie2R9b-F_FZp27eu3rEaENFrlxIesI-R58e_ysDwtg",
        attributes: [
          { trait_type: "Background", value: "Purple" },
          { trait_type: "Fur", value: "Red Panda" },
          { trait_type: "Mouth", value: "Hmm" },
          { trait_type: "Eyes", value: "Spirited" },
          { trait_type: "Hat", value: "Surf Bucket Hat" },
          { trait_type: "Clothes", value: "Scarf" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 1098, absolute_rarity: 1098, crawl: {} },
          merarity: {
            rank: 1098,
            tokenKey: "J62TMTBfe9rqQ1TxwEx58JGfLGktyDVBDMoiQTPmyPmm",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T01:30:48.757Z",
        updatedAt: "2023-05-06T01:30:48.757Z"
      },
      {
        mintAddress: "J5ruUtPbkokm96abFVHuVfdurDoDZSMGjPgBgQ5E496G",
        supply: 1,
        title: "Okay Bear #858",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 119,
        escrowPubkey: "QyoUBuJ4dRAtCZB24ehUPvNL3ZiPgU8pyTLc7W4xeLE",
        owner: "3hPTZiqLpsgKT8FuaWX1PbSQRNiGiVjjhdVjY14fNzCc",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "DPP8BRwGwerehFGdivmHKUTSdzxj4fqo46F3XMNssu1W",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/VKXz65TKBn9zv0TgRRlbPxTCLsGhuT0T1whkD_boO8c",
        attributes: [
          { trait_type: "Background", value: "Warm Grey" },
          { trait_type: "Fur", value: "Grizzly" },
          { trait_type: "Mouth", value: "Clean Smile" },
          { trait_type: "Eyes", value: "White Glow" },
          { trait_type: "Hat", value: "Runner Cap" },
          { trait_type: "Clothes", value: "Autumn Sweater" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 5234, absolute_rarity: 5234, crawl: {} },
          merarity: {
            rank: 5234,
            tokenKey: "J5ruUtPbkokm96abFVHuVfdurDoDZSMGjPgBgQ5E496G",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T21:40:52.072Z",
        updatedAt: "2023-05-07T21:40:52.072Z"
      },
      {
        mintAddress: "J4Xc9KnrG6LXf9vVVe1XyfzXm4QDjVpRbgEJpXUJ9KVH",
        supply: 1,
        title: "Okay Bear #9689",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 120,
        escrowPubkey: "4FCoFkq3j3FRgLNFiBVU7D9MqW3TXwHfPYwRtWdYA2rn",
        owner: "4hWsjF76UioJLUnF8gzfoCerRypTVHBjnFJC8rSQ2zWA",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "6xj9bk57MiaiYeDSTTMvzVXoHk7f9UDwFA2oaXe7LNX",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/QNxJ8KMpBcuBMmVdOKeHbbAYJYhwQ5iUmSaO0N26J-Q",
        attributes: [
          { trait_type: "Background", value: "Warm Grey" },
          { trait_type: "Fur", value: "Polar" },
          { trait_type: "Mouth", value: "Pouting" },
          { trait_type: "Eyes", value: "Annoyed" },
          { trait_type: "Clothes", value: "Polo with Headphones" },
          { trait_type: "Eyewear", value: "Holographic" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 3630, absolute_rarity: 3630, crawl: {} },
          merarity: {
            rank: 3630,
            tokenKey: "J4Xc9KnrG6LXf9vVVe1XyfzXm4QDjVpRbgEJpXUJ9KVH",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-05T22:13:54.944Z",
        updatedAt: "2023-05-05T22:13:54.944Z"
      },
      {
        mintAddress: "J4RJT6EMDKVRFCs4CAvm5xUvpZPYTjQtjzr9K53nBctf",
        supply: 1,
        title: "Okay Bear #8656",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 240,
        escrowPubkey: "9sGXvV8edDnBqtYHmV2A2AguS9amFRcM7TBvxkX9igL1",
        owner: "CQHFjBf8Ar7kEgVRpGdLLGRnXN7pGSZBJys6P38LRXm6",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "E9j5cMgNkjeqe8kKP3UmD1LFdBdMd4PMTErhjNzifpit",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/QtOWN1N-qYWVPGXyyukbfJknWu6Ja5Qa2w3pk9GMr8c",
        attributes: [
          { trait_type: "Background", value: "Blue" },
          { trait_type: "Fur", value: "Red Panda" },
          { trait_type: "Mouth", value: "Earphones" },
          { trait_type: "Eyes", value: "Okay" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 7916, absolute_rarity: 7916, crawl: {} },
          merarity: {
            rank: 7916,
            tokenKey: "J4RJT6EMDKVRFCs4CAvm5xUvpZPYTjQtjzr9K53nBctf",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T16:51:23.470Z",
        updatedAt: "2023-05-06T16:51:23.470Z"
      },
      {
        mintAddress: "J2JcH1Q3WafNE3ukVZdbhjiy1SGYvwr5FuwC1W5WVVLT",
        supply: 1,
        title: "Okay Bear #2595",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 89,
        escrowPubkey: "7Xyyrv6urQyMayQGbSDUWb1NbN8JKhoGt7uRn5TvViVd",
        owner: "Ap7t8CQisEtJNjubYBEA2NV4Rb4RFtS9BPALX7bz5yiY",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "Gz1d7etZ6pvXEnfe58mRLwq1zcBJPoqEEPgQCwie4PgL",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/Pn3TN2z7DBSK8zX3PYqrpYDNWoa5N1_GQmKrS0evIOw",
        attributes: [
          { trait_type: "Background", value: "Cream" },
          { trait_type: "Fur", value: "Grizzly" },
          { trait_type: "Mouth", value: "Toothpick" },
          { trait_type: "Eyes", value: "Okay" },
          { trait_type: "Hat", value: "Skate Cap" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 8865, absolute_rarity: 8865, crawl: {} },
          merarity: {
            rank: 8865,
            tokenKey: "J2JcH1Q3WafNE3ukVZdbhjiy1SGYvwr5FuwC1W5WVVLT",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T09:05:21.623Z",
        updatedAt: "2023-05-06T09:05:21.623Z"
      },
      {
        mintAddress: "iGcQhqEi9Ps8oDJLNZZk3iNPX41nGGhozUBEDmLPGn5",
        supply: 1,
        title: "Okay Bear #3588",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 275,
        escrowPubkey: "HKNDi1qn2Md3EZ8XUcwiGjjnim3FKFtFmmSeNvX3mHQE",
        owner: "5kmeXWZF3JVgdox9PtG7P3xHkPsSgZgayLjHTZNnRJbh",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "CmWHfGnTNg7Uyo39ZpPh8ruVRrRsYTneMTLur8vX9Wxk",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/9H5JiC4y5NXZ9drLG-zcpNZImg2xMqmCPPhWoJ0LL9c",
        attributes: [
          { trait_type: "Background", value: "Grey" },
          { trait_type: "Fur", value: "Tan" },
          { trait_type: "Mouth", value: "Forced Smile" },
          { trait_type: "Eyes", value: "Tired" },
          { trait_type: "Hat", value: "Classic Cap" },
          { trait_type: "Clothes", value: "Sleeveless Tee" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 3490, absolute_rarity: 3490, crawl: {} },
          merarity: {
            rank: 3490,
            tokenKey: "iGcQhqEi9Ps8oDJLNZZk3iNPX41nGGhozUBEDmLPGn5",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T17:16:07.112Z",
        updatedAt: "2023-05-07T17:16:07.112Z"
      },
      {
        mintAddress: "iAKwvk8qEbhHe1zVen8RG6RHqiA5FwtdhQ4ZL6AsFpz",
        supply: 1,
        title: "Okay Bear #6338",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 440,
        escrowPubkey: "6eogsNykSieq9EoxECgDPS9ghsKi2xYdZ7basScew1LX",
        owner: "GxZKbXoQccToq2G7Etzg2NcHETy4tLiW6j4HiXzzYSDA",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "EUohhkHEyAGAvgjS5y8mH6sZgovXGvBe83TmT9eHqvtM",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/Oe_mC--8Ph83XXMK7vJ1Kp8oiuMye3n38_XLAH8qR7M",
        attributes: [
          { trait_type: "Background", value: "Cream" },
          { trait_type: "Fur", value: "Polar" },
          { trait_type: "Mouth", value: "Worried" },
          { trait_type: "Eyes", value: "Sad" },
          { trait_type: "Hat", value: "Bandana" },
          { trait_type: "Clothes", value: "Formal Vest" },
          { trait_type: "Eyewear", value: "Clear Glasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 260, absolute_rarity: 260, crawl: {} },
          merarity: {
            rank: 260,
            tokenKey: "iAKwvk8qEbhHe1zVen8RG6RHqiA5FwtdhQ4ZL6AsFpz",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T06:08:55.793Z",
        updatedAt: "2023-05-06T06:08:55.793Z"
      },
      {
        mintAddress: "HYkrZeJuAYnNXmQSd2TtSkDe1tb6GNFWkFDe6b152LRJ",
        supply: 1,
        title: "Okay Bear #5462",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 88.88,
        escrowPubkey: "HCj46bcmufsKRmYkK8Kw9kdDJECDSnHW6uyfoLL92ZBd",
        owner: "G27MuUDEMPCSqwV4cgnXBHWUwoP1XRhh7UchagyL3YMe",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "3qGBTH7SNwUkyALVCkCNFCutGCVejCrMveUQwoy7PzjV",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/ms4hot9wDa0dDikapxy1NoS6EJ6aeGDy0HZMhMGs0No",
        attributes: [
          { trait_type: "Background", value: "White" },
          { trait_type: "Fur", value: "Red Panda" },
          { trait_type: "Mouth", value: "Okay" },
          { trait_type: "Eyes", value: "Disappointed" },
          { trait_type: "Hat", value: "Sweatband" },
          { trait_type: "Clothes", value: "Tweed Suit" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 4925, absolute_rarity: 4925, crawl: {} },
          merarity: {
            rank: 4925,
            tokenKey: "HYkrZeJuAYnNXmQSd2TtSkDe1tb6GNFWkFDe6b152LRJ",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T16:51:56.400Z",
        updatedAt: "2023-05-07T16:51:56.400Z"
      },
      {
        mintAddress: "HvYS5PdNrCtagAj8d7Y5j2iY5nrhi4H3kERwTcUFMz9e",
        supply: 1,
        title: "Okay Bear #3864",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 212,
        escrowPubkey: "cr7WF8E3riK6JbxrFTsjynEkhkbVayB2HEtmp2d1m1s",
        owner: "4SW4H9RL7bRFdNijZU1Ee2W54QzudsiiFd3DobSBKzwY",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "CefikA6nFjJbnCuoC35A3yY6mUktDHzRZnKPH64i35Um",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/aVrkp0p0FZCBDWZoT1IXiHoGoCIcpXhQdsCeBJp8WeI",
        attributes: [
          { trait_type: "Background", value: "White" },
          { trait_type: "Fur", value: "Dark Brown" },
          { trait_type: "Mouth", value: "Okay" },
          { trait_type: "Eyes", value: "Tired" },
          { trait_type: "Clothes", value: "Torn Sleeveless Tee" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 9526, absolute_rarity: 9526, crawl: {} },
          merarity: {
            rank: 9526,
            tokenKey: "HvYS5PdNrCtagAj8d7Y5j2iY5nrhi4H3kERwTcUFMz9e",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T22:21:05.504Z",
        updatedAt: "2023-05-07T22:21:05.504Z"
      },
      {
        mintAddress: "HVVNg7mPJhiYwH8hCGtSKoCkPrZ2qirHBTacu5UAF6Jr",
        supply: 1,
        title: "Okay Bear #184",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 137,
        escrowPubkey: "B1GgkLP1bu1vuw7tXJSTcxDAmBDBBzn6pKUhD4RP6Nqa",
        owner: "H827739oMqjbMio1ADgqeGm1m3QZ7W26thBzgdDvPL1A",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "5vhR2MRjHnoZbRNimqtHbZ2CxZCa3QC7JiyaNgzrJEck",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/8No317ab3sXPEAigEq2y5Bu6BYbEVVYeBB4X1n8zO0I",
        attributes: [
          { trait_type: "Background", value: "Green" },
          { trait_type: "Fur", value: "Grizzly" },
          { trait_type: "Mouth", value: "Okay" },
          { trait_type: "Eyes", value: "Sarcastic" },
          { trait_type: "Hat", value: "Visor" },
          { trait_type: "Clothes", value: "Urban Hoodie" },
          { trait_type: "Eyewear", value: "Round Glasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 3400, absolute_rarity: 3400, crawl: {} },
          merarity: {
            rank: 3400,
            tokenKey: "HVVNg7mPJhiYwH8hCGtSKoCkPrZ2qirHBTacu5UAF6Jr",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T20:36:38.037Z",
        updatedAt: "2023-05-06T20:36:38.037Z"
      },
      {
        mintAddress: "HU4Wjoxxh9ngyTUwJwUXEvF8YnBRSMi4pDgxH6QWwqBw",
        supply: 1,
        title: "Okay Bear #9417",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 120,
        escrowPubkey: "9N1n9TEhTzs9k8tJyAQrpUah2MrfDJ6gqXeUMFStNLjT",
        owner: "HytQRtSfyCwm5hP4BqBPRnPJvQ8FsyEcNnb1jmxovd4j",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "FjEbfH48fyWV5wTyxJ5PWRkB99wkw6mpvNqnjLro34Pf",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/5G6BJi4SgvPy9XoZi0KlpEAYDUnUkITgZ0mWOVP20nM",
        attributes: [
          { trait_type: "Background", value: "Grey" },
          { trait_type: "Fur", value: "Polar" },
          { trait_type: "Mouth", value: "Clean Smile" },
          { trait_type: "Eyes", value: "Interested" },
          { trait_type: "Hat", value: "Pom Pom Beanie" },
          { trait_type: "Clothes", value: "Black Tee" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 5859, absolute_rarity: 5859, crawl: {} },
          merarity: {
            rank: 5859,
            tokenKey: "HU4Wjoxxh9ngyTUwJwUXEvF8YnBRSMi4pDgxH6QWwqBw",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T15:10:35.367Z",
        updatedAt: "2023-05-06T15:10:35.367Z"
      },
      {
        mintAddress: "HS1W2snG1jjav9GzpTmAr1brfskq6qhi8m8rhT6Chmys",
        supply: 1,
        title: "Okay Bear #1596",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 90,
        escrowPubkey: "6RaAs9XSjNEFK6K1maxJKHmDL7YvzNfWBBcZmDNsoJ8t",
        owner: "Efx1LHEbVZQyqxxkibrZ11ehDP38nxPXCj38GoUn4i83",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "5nuHwp7MyDQYx5suqryMDRWtkxMrrsyP2uyWbMgUL372",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/HUTvlBkPopjl0f9Z7W-wrYkRCd3-tb8HRUDjccxiN1c",
        attributes: [
          { trait_type: "Background", value: "White" },
          { trait_type: "Fur", value: "Sand" },
          { trait_type: "Mouth", value: "Okay" },
          { trait_type: "Eyes", value: "Okay" },
          { trait_type: "Hat", value: "Pencil" },
          { trait_type: "Clothes", value: "Golf Polo" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 8628, absolute_rarity: 8628, crawl: {} },
          merarity: {
            rank: 8628,
            tokenKey: "HS1W2snG1jjav9GzpTmAr1brfskq6qhi8m8rhT6Chmys",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T05:24:02.555Z",
        updatedAt: "2023-05-06T05:24:02.555Z"
      },
      {
        mintAddress: "HQG45fCND4S6o7mkvxiX9hxBmVeZ1pB65VMtNj1BueSC",
        supply: 1,
        title: "Okay Bear #1582",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 125,
        escrowPubkey: "E8PM3u1wLUAdLzsWXUMNRYZPbdsNnwhj1Dd7T7aaPZ9o",
        owner: "AyYa1NUgnaSUjK2AKgmMv4KjxBuHf272uqam3TW6KyRy",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "DbbVuf8ah9mkXXkhpZoQxrPbo6U1sMHW8YsjZQmx4dyh",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/m2XKyA8XUtnIPDo81qt6Wq9__P8BUB29svlR3bN4ISg",
        attributes: [
          { trait_type: "Background", value: "Green" },
          { trait_type: "Fur", value: "Polar" },
          { trait_type: "Mouth", value: "Okay" },
          { trait_type: "Eyes", value: "Happy" },
          { trait_type: "Hat", value: "Sweatband" },
          { trait_type: "Clothes", value: "Formal Vest" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 6847, absolute_rarity: 6847, crawl: {} },
          merarity: {
            rank: 6847,
            tokenKey: "HQG45fCND4S6o7mkvxiX9hxBmVeZ1pB65VMtNj1BueSC",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T06:49:10.308Z",
        updatedAt: "2023-05-07T06:49:10.308Z"
      },
      {
        mintAddress: "HmQGFUKPJNtAyP1zH2KwTDuHkhhq1VUycq2AdoUkm6ed",
        supply: 1,
        title: "Okay Bear #405",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 149,
        escrowPubkey: "4asyLKBxuUEPwvUdbFkP2DoeuxiExnmsVTTFYq8p8mS6",
        owner: "7TkY22C4PZG4f6YbULzAtrS5mc6X9wu1MaspHuMgE5Xs",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "25UuEdMzxez2N8ven4d1ZJj6RRXgBouWsVakhK1ku8Cb",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/Kpti3wqFD5-2U11TtMmOTMQygmuhBvdYJfCMPcc0XiA",
        attributes: [
          { trait_type: "Background", value: "Purple" },
          { trait_type: "Fur", value: "Tan" },
          { trait_type: "Mouth", value: "Gah" },
          { trait_type: "Eyes", value: "Okay" },
          { trait_type: "Hat", value: "Sweatband" },
          { trait_type: "Clothes", value: "Double Jacket" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 7488, absolute_rarity: 7488, crawl: {} },
          merarity: {
            rank: 7488,
            tokenKey: "HmQGFUKPJNtAyP1zH2KwTDuHkhhq1VUycq2AdoUkm6ed",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-05T23:20:23.757Z",
        updatedAt: "2023-05-05T23:20:23.757Z"
      },
      {
        mintAddress: "HMdFiJ6UR9bk2y52Hms652H2fBLZwbW6WNPbkKREq7iB",
        supply: 1,
        title: "Okay Bear #4659",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 133,
        escrowPubkey: "EPptHMgagJBzj12uZzTCH6irAsyZpgiAhSzwM6dFYPfv",
        owner: "CesA1PUnkUFhnq94vcnpPh5kLWeqsHNVVX9yz1pgDbxb",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "9aN9JAwz2aRUVhFUgc96Q3RhPvYCcuuHcMaXxoMMBUj9",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/igMQNHpk2WKYjtbZBXSiW6hV3SB_2AImpSGj34rcCQo",
        attributes: [
          { trait_type: "Background", value: "White" },
          { trait_type: "Fur", value: "Grizzly" },
          { trait_type: "Mouth", value: "Ohh" },
          { trait_type: "Eyes", value: "Happy" },
          { trait_type: "Hat", value: "Rabbit Fur Hat" },
          { trait_type: "Clothes", value: "Loose Overalls" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 3329, absolute_rarity: 3329, crawl: {} },
          merarity: {
            rank: 3329,
            tokenKey: "HMdFiJ6UR9bk2y52Hms652H2fBLZwbW6WNPbkKREq7iB",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T07:41:31.951Z",
        updatedAt: "2023-05-07T07:41:31.951Z"
      },
      {
        mintAddress: "Hm7iihW5G23k3a7riLrgaxmCXkVWrZKv9mLYS3smDeWp",
        supply: 1,
        title: "Okay Bear #2551",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 200,
        escrowPubkey: "2daYDtTkkeTJn1f65UxiFWhkcVCyJLJtoVMhvPLCE1PW",
        owner: "H3AkHZHfcqGCcJpBn3FJWe52LcLxFMJQoZvZ6XyApFWf",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "7zAukcoZWbikLN2SJ3dQRBa1Hg5Hvq54EZYuoSEcuB6k",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/EGUDHrZyvW6g3OjZ-0k3vaoGzzrOoUM3BmGwT5ZwC8M",
        attributes: [
          { trait_type: "Background", value: "Warm Grey" },
          { trait_type: "Fur", value: "Ginger" },
          { trait_type: "Mouth", value: "Oou" },
          { trait_type: "Eyes", value: "Closed" },
          { trait_type: "Clothes", value: "Fur Coat" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 3038, absolute_rarity: 3038, crawl: {} },
          merarity: {
            rank: 3038,
            tokenKey: "Hm7iihW5G23k3a7riLrgaxmCXkVWrZKv9mLYS3smDeWp",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-08T01:43:37.972Z",
        updatedAt: "2023-05-08T01:43:37.972Z"
      },
      {
        mintAddress: "HLhjodtEign7QhPrjqxiacZrBC9qa1ccRrYR5QKHLYZP",
        supply: 1,
        title: "Okay Bear #1641",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 290,
        escrowPubkey: "AstyCKJfXRyKPQKFN9otUePy4DJbB2EkhFnis1BD6777",
        owner: "BBdZ4k1ahX6igWNw5CmJAHHeCrUG1KKVsRBVp6mDudeF",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "7b7kRDYEEWtuue7L92qGsmgLyXooQUgfeaFgnskWcKYX",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/yOnAblnn4KOAGqvHUB1w8JjH9xlJN6GKgQhG7H39SiM",
        attributes: [
          { trait_type: "Background", value: "Warm Grey" },
          { trait_type: "Fur", value: "Tan" },
          { trait_type: "Mouth", value: "Ohh" },
          { trait_type: "Eyes", value: "Golden Glow" },
          { trait_type: "Clothes", value: "Black Tee" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 6940, absolute_rarity: 6940, crawl: {} },
          merarity: {
            rank: 6940,
            tokenKey: "HLhjodtEign7QhPrjqxiacZrBC9qa1ccRrYR5QKHLYZP",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T20:11:26.977Z",
        updatedAt: "2023-05-06T20:11:26.977Z"
      },
      {
        mintAddress: "HkzdHuZ4htDk8giT5rcuu3s8TAtEePqLWHbjECYrpmZd",
        supply: 1,
        title: "Okay Bear #5133",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 97.44,
        escrowPubkey: "4YFmo45YgaaqLg5FZtGBR3Tdym3jhi37dSMBUG5bKrZb",
        owner: "AT6R4eJrJyXDDQMKvxzwLQ2n83x4LhxXME3CnKDdcLbR",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "AZEbXPULVVDtH3Gejt5swWmvFmT2ePHjLSNP4uTwMqFh",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/xIrC5mW7c2_hg_QijonjKOYAxgcKwYbOMn1YO9inra4",
        attributes: [
          { trait_type: "Background", value: "Purple" },
          { trait_type: "Fur", value: "Black" },
          { trait_type: "Mouth", value: "Clean Smile" },
          { trait_type: "Eyes", value: "Wide Eyed" },
          { trait_type: "Hat", value: "Visor" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 6701, absolute_rarity: 6701, crawl: {} },
          merarity: {
            rank: 6701,
            tokenKey: "HkzdHuZ4htDk8giT5rcuu3s8TAtEePqLWHbjECYrpmZd",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-05T23:11:34.326Z",
        updatedAt: "2023-05-05T23:11:34.326Z"
      }
    ]
  },
  {
    results: [
      {
        mintAddress: "HK5eojCCmkzkMJJmDrduvpSh8rF4N2WaTQCRr7nzrKZo",
        supply: 1,
        title: "Okay Bear #6260",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 165,
        escrowPubkey: "4jgD748myMA16PPTJqj4m7jTWqmTW1bx2ifTMXqDMcrP",
        owner: "4hWsjF76UioJLUnF8gzfoCerRypTVHBjnFJC8rSQ2zWA",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "2FbTjCwhSKz1AYcfLc6uRNhVQVs4seb2hc9SMK4bm8Rc",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/HA4UkqSU1BjQRbDrQQzDodF0v8wWNVazpTzNHNiKJ1M",
        attributes: [
          { trait_type: "Background", value: "Purple" },
          { trait_type: "Fur", value: "Lofi" },
          { trait_type: "Mouth", value: "Toothpick" },
          { trait_type: "Eyes", value: "Tired" },
          { trait_type: "Hat", value: "Sweatband" },
          { trait_type: "Clothes", value: "Autumn Sweater" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 897, absolute_rarity: 897, crawl: {} },
          merarity: {
            rank: 897,
            tokenKey: "HK5eojCCmkzkMJJmDrduvpSh8rF4N2WaTQCRr7nzrKZo",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-05T23:50:28.691Z",
        updatedAt: "2023-05-05T23:50:28.691Z"
      },
      {
        mintAddress: "HJyWpkPLYccRfXjGvnE9GCB2M3erP8SJVSjo1GLtxzJt",
        supply: 1,
        title: "Okay Bear #2095",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 99.99,
        escrowPubkey: "AmLtVHCQC4aWVn7u5hT1Yq8MFkesQNDc1WWBXDDpLMd7",
        owner: "ANk1Ud2cFkEeNuumpChuo4PSd2x4wATKeBYpvcKQdWeD",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "DBcfPvFeHT5N9hPr5LW7S1FG5RQk3dEf4FHhWVChLSQg",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/CX_XLOC907gs2LGm7qTauiiQfApOy2XnmKXWqfipPaQ",
        attributes: [
          { trait_type: "Background", value: "Grey" },
          { trait_type: "Fur", value: "Andean" },
          { trait_type: "Mouth", value: "Okay" },
          { trait_type: "Eyes", value: "Okay" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 9962, absolute_rarity: 9962, crawl: {} },
          merarity: {
            rank: 9962,
            tokenKey: "HJyWpkPLYccRfXjGvnE9GCB2M3erP8SJVSjo1GLtxzJt",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T19:48:51.677Z",
        updatedAt: "2023-05-06T19:48:51.677Z"
      },
      {
        mintAddress: "HieRGpiqZyQYdL1uYWUp8otUrsK936R5xb1Ama4FWrP3",
        supply: 1,
        title: "Okay Bear #5925",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 888,
        escrowPubkey: "63c6p89bAeKxPnvJ28zBmWVJ4gb8mkJca5rsLhwQ2of5",
        owner: "3QhyETgp8b9YNmcHWpdQxGpV52eXCJjeMFBPjii5hmUP",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "2V59GSDesZgVyaWDLBNXWMe62s5APS8NgoxSiKBrhF91",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/H3PGOQ9cTDLiJ7kjjXTdgtbknyYEAUZJc_vY6rcc6P8",
        attributes: [
          { trait_type: "Background", value: "Green" },
          { trait_type: "Fur", value: "Polar" },
          { trait_type: "Mouth", value: "Wheat" },
          { trait_type: "Eyes", value: "Annoyed" },
          { trait_type: "Hat", value: "Book" },
          { trait_type: "Clothes", value: "Silk Robe" },
          { trait_type: "Eyewear", value: "Circle Sunglasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 56, absolute_rarity: 56, crawl: {} },
          merarity: {
            rank: 56,
            tokenKey: "HieRGpiqZyQYdL1uYWUp8otUrsK936R5xb1Ama4FWrP3",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T04:10:31.424Z",
        updatedAt: "2023-05-06T04:10:31.424Z"
      },
      {
        mintAddress: "HGtShPwBYNJLADSEeeueCzk1FCbu6ZB6pgJJRhUUa7zb",
        supply: 1,
        title: "Okay Bear #2394",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 67,
        escrowPubkey: "8hx1R2TtWzaVY8zPSNr8GvumDKNLeQzMVUiqmHc4F2A7",
        owner: "3kpdQN7DhFEzqyLKBDHPtZHMRASGxUoZPVmaGpBAaPaL",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "5NH2SWhcDGkK1Vprzu5A4GC9VvGQzBfvWqqyiFybDYfx",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/-O5UABwmPHNa3PnSTDZtndMiS5_OwjwYXQAQd6neE5M",
        attributes: [
          { trait_type: "Background", value: "Grey" },
          { trait_type: "Fur", value: "Grizzly" },
          { trait_type: "Mouth", value: "Okay" },
          { trait_type: "Eyes", value: "Okay" },
          { trait_type: "Hat", value: "Worn Out Cap" },
          { trait_type: "Clothes", value: "Leather Jacket" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 8463, absolute_rarity: 8463, crawl: {} },
          merarity: {
            rank: 8463,
            tokenKey: "HGtShPwBYNJLADSEeeueCzk1FCbu6ZB6pgJJRhUUa7zb",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T12:57:19.042Z",
        updatedAt: "2023-05-06T12:57:19.042Z"
      },
      {
        mintAddress: "HdG6e7AxM18GS8cZpsVdKWUFpYsNBQE25GnsfVMhoKDp",
        supply: 1,
        title: "Okay Bear #5408",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 99.9,
        escrowPubkey: "BkL7r3vs9XdzVYEiJJ46vcMPRpphcneuA6kgBAmHSEUu",
        owner: "JBBw8NLRC2UJf5cZAuqZc48azPKqXx5VPZHtQMAjHQxG",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "AxnHQKvkwRYoC5Vp8i2Jnnt3p4Ft5W5zbAB5JkqdXaLC",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/Thp2MpAoTqItX9pgLO_wPLOGFys32psiNWB-YfOwPJk",
        attributes: [
          { trait_type: "Background", value: "Grey" },
          { trait_type: "Fur", value: "Grizzly" },
          { trait_type: "Mouth", value: "Grimace" },
          { trait_type: "Eyes", value: "Okay" },
          { trait_type: "Hat", value: "Classic Cap" },
          { trait_type: "Clothes", value: "Formal Vest" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 4621, absolute_rarity: 4621, crawl: {} },
          merarity: {
            rank: 4621,
            tokenKey: "HdG6e7AxM18GS8cZpsVdKWUFpYsNBQE25GnsfVMhoKDp",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T23:03:47.333Z",
        updatedAt: "2023-05-06T23:03:47.333Z"
      },
      {
        mintAddress: "HdCyNRt9825Pgtyy2QMXbVGWpUspBC3XK1LJdEhMnpqM",
        supply: 1,
        title: "Okay Bear #7847",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 63,
        escrowPubkey: "9gdjDhNUg4PGvKSXF2REX2hPm9hMkJTVQomqqaYQqGjZ",
        owner: "DhponuhcPQ6MQSdjPq4YEkVBRX1uKDKUwxN6rbHZmFTg",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "8vxzfYYV4JoKiFjNR6ijpcJt9LcXWduGRVozjWNTUkq7",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/UobMFlyoY7v9NW3h544Af9r1u3FGLyVRW9h8w6UWHx0",
        attributes: [
          { trait_type: "Background", value: "Purple" },
          { trait_type: "Fur", value: "Sand" },
          { trait_type: "Mouth", value: "Pouting" },
          { trait_type: "Eyes", value: "Okay" },
          { trait_type: "Hat", value: "Classic Cap" },
          { trait_type: "Clothes", value: "Camel Coat" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 7080, absolute_rarity: 7080, crawl: {} },
          merarity: {
            rank: 7080,
            tokenKey: "HdCyNRt9825Pgtyy2QMXbVGWpUspBC3XK1LJdEhMnpqM",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T16:14:45.239Z",
        updatedAt: "2023-05-06T16:14:45.239Z"
      },
      {
        mintAddress: "HBRy1ZTNqzJhrTcMPpvf463znYqf1Vwiw93w9xNh8HUu",
        supply: 1,
        title: "Okay Bear #4415",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 450,
        escrowPubkey: "EjVPY9SRkunSPXczo5UQAbTGfwMFHAYEr656UaTcT2R5",
        owner: "E1P849pXgy7Pkjms8q9XYATajtr6rH7EFf3vQw8wbhMV",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "DgQCA5rhQ5miQeSdSWm2USwefLFoMT6q8YifrDtDfj4X",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/lr4mjWfQBchW0LeUs8g8L6jvRf-V6Ws6pLA8Y6OPYZs",
        attributes: [
          { trait_type: "Background", value: "Warm Grey" },
          { trait_type: "Fur", value: "Panda" },
          { trait_type: "Mouth", value: "Gah" },
          { trait_type: "Eyes", value: "Interested" },
          { trait_type: "Hat", value: "Chullo" },
          { trait_type: "Eyewear", value: "Wayfarer Sunglasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 1313, absolute_rarity: 1313, crawl: {} },
          merarity: {
            rank: 1313,
            tokenKey: "HBRy1ZTNqzJhrTcMPpvf463znYqf1Vwiw93w9xNh8HUu",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T08:47:29.742Z",
        updatedAt: "2023-05-07T08:47:29.742Z"
      },
      {
        mintAddress: "HbEJvrFQ5rN3DJhLqTMzn5g42Zm1trqq8huqnonEce3x",
        supply: 1,
        title: "Okay Bear #4518",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 75,
        escrowPubkey: "9JS6Q27U9FBxd43s64rmpst3AyNmnU5mcfhA3D7V5SgD",
        owner: "otDwuALaNi5i4cioFhYXk8Y8ZsGMsKb9SmiFbX2T12h",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "2Rj5EFn17ooDiw9ZrKw6SwZSLCWHNBdWhC6eUiZ7nR1z",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/5tGR5J41DZfDvWn3ZxzLozQ9zcg2vcvzvZOSn5oB-sc",
        attributes: [
          { trait_type: "Background", value: "Green" },
          { trait_type: "Fur", value: "Dark Brown" },
          { trait_type: "Mouth", value: "Yum" },
          { trait_type: "Eyes", value: "Sarcastic" },
          { trait_type: "Hat", value: "Backwards Flat Cap" },
          { trait_type: "Clothes", value: "Black Tee" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 4461, absolute_rarity: 4461, crawl: {} },
          merarity: {
            rank: 4461,
            tokenKey: "HbEJvrFQ5rN3DJhLqTMzn5g42Zm1trqq8huqnonEce3x",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T14:57:51.800Z",
        updatedAt: "2023-05-06T14:57:51.800Z"
      },
      {
        mintAddress: "HACD1GTjL3xjBCtjsfmovD2YQh6dT8kbjPQyrWSqstaJ",
        supply: 1,
        title: "Okay Bear #9915",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 90,
        escrowPubkey: "2TzptbDgCEx85fSHocDiWcp61xLScemFydXcLQMHzRdm",
        owner: "H3AkHZHfcqGCcJpBn3FJWe52LcLxFMJQoZvZ6XyApFWf",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "4S3Af55aLxrS5cPmgpKnf6BKqWFvYWg3rQ6EYViu4aVc",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/piDET5b063wn66Mjzz8HBwNTGVxInlMNDfAvHtkaaho",
        attributes: [
          { trait_type: "Background", value: "Yellow" },
          { trait_type: "Fur", value: "Grizzly" },
          { trait_type: "Mouth", value: "Okay" },
          { trait_type: "Eyes", value: "Okay" },
          { trait_type: "Hat", value: "Runner Cap" },
          { trait_type: "Clothes", value: "Insulated Jacket" },
          { trait_type: "Eyewear", value: "Clear Glasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 5116, absolute_rarity: 5116, crawl: {} },
          merarity: {
            rank: 5116,
            tokenKey: "HACD1GTjL3xjBCtjsfmovD2YQh6dT8kbjPQyrWSqstaJ",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-08T01:10:46.013Z",
        updatedAt: "2023-05-08T01:10:46.013Z"
      },
      {
        mintAddress: "h9vKcgZT5B4ZQrPwZPNiBcE2VniFoxRpbVg28a7VQeA",
        supply: 1,
        title: "Okay Bear #3630",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 120,
        escrowPubkey: "4iQthcUBjiCi9scw6nzq2n2TCvbdKM6wYcFH5f417yqV",
        owner: "CgxZsmgBfVb6jG8TYQdZ7iAHeH446Ypecf1X84xkk2og",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "EWSyfC8ZVHDMdq8fDZ5KihALj9TqZz5G8U3dfrzuPRNY",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/ZjX_gfRimW6h5AocVztwUN9uvU0sqUZsWzHgZsLohCI",
        attributes: [
          { trait_type: "Background", value: "Blue" },
          { trait_type: "Fur", value: "Polar" },
          { trait_type: "Mouth", value: "Oou" },
          { trait_type: "Eyes", value: "Happy" },
          { trait_type: "Hat", value: "Okay Beanie" },
          { trait_type: "Clothes", value: "Woven Sweater" },
          { trait_type: "Eyewear", value: "Wayfarer Sunglasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 844, absolute_rarity: 844, crawl: {} },
          merarity: {
            rank: 844,
            tokenKey: "h9vKcgZT5B4ZQrPwZPNiBcE2VniFoxRpbVg28a7VQeA",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-05T23:46:06.143Z",
        updatedAt: "2023-05-05T23:46:06.143Z"
      },
      {
        mintAddress: "H86A1FdsZGzKPT43bThjQxVfGxRmswqtXiiqY8g6SbRg",
        supply: 1,
        title: "Okay Bear #7205",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 99,
        escrowPubkey: "H4g1QJJBSDyQNxyoyokwLKHdbxRsUDVpKUM3bWEnzeN4",
        owner: "H3AkHZHfcqGCcJpBn3FJWe52LcLxFMJQoZvZ6XyApFWf",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "525eTYU3NiEPSv1kN9LAb97Kct7jvY6rnEf5PZLi1C18",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/ASQdlTkUk0_xdjFxzhkIiwCVy3O7rop4WdFLWrLZCLs",
        attributes: [
          { trait_type: "Background", value: "Green" },
          { trait_type: "Fur", value: "Tan" },
          { trait_type: "Mouth", value: "Okay" },
          { trait_type: "Eyes", value: "White Glow" },
          { trait_type: "Clothes", value: "Puffer Jacket" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 9251, absolute_rarity: 9251, crawl: {} },
          merarity: {
            rank: 9251,
            tokenKey: "H86A1FdsZGzKPT43bThjQxVfGxRmswqtXiiqY8g6SbRg",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T16:23:44.715Z",
        updatedAt: "2023-05-07T16:23:44.715Z"
      },
      {
        mintAddress: "H4RHUQM3YnHoxYsXMtbDGdi39jCb3HuGBhu4699yAGMc",
        supply: 1,
        title: "Okay Bear #266",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 120,
        escrowPubkey: "EvKPMXpvjXtvBDS9vaz9LzV9VcT5y4XpKQRu1kWWdxc2",
        owner: "AnBwuGrvm9w7kgM5RJgVK8jier26Ft9pyBGNSzAEWbQd",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "6i3SARAiYxzhvECt9THoYE2sHekND9wYUyHSRi2fvzUb",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/EoyVPgrYpaqbPNzNQErv5mqF3cqCAhpLkABJnxAggek",
        attributes: [
          { trait_type: "Background", value: "White" },
          { trait_type: "Fur", value: "Grizzly" },
          { trait_type: "Mouth", value: "Forced Smile" },
          { trait_type: "Eyes", value: "Spirited" },
          { trait_type: "Hat", value: "Head Cam" },
          { trait_type: "Clothes", value: "Hoodie with Headphones" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 2552, absolute_rarity: 2552, crawl: {} },
          merarity: {
            rank: 2552,
            tokenKey: "H4RHUQM3YnHoxYsXMtbDGdi39jCb3HuGBhu4699yAGMc",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T09:23:41.404Z",
        updatedAt: "2023-05-07T09:23:41.404Z"
      },
      {
        mintAddress: "H4FYiPH2E9rRv8juiX5GwHDFdiB6nvPrRqHxb4QBv1kT",
        supply: 1,
        title: "Okay Bear #8546",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 75,
        escrowPubkey: "GAb9U6Ad5hHohvBeBoZJ4mjrN4jQnLjZUJXbZhTeJ15S",
        owner: "EyWoDersP7ZZABUoFEAqLmiEYXofxoSSZuWy6WPHtrSY",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "AFNMFoDd2WG4sEAEBE1eVWVomfxw2smcgbTQg43CJBo1",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/urFAd4EOMpKoheSXJYv9up-l7J3tqBdDCJC--ceszBw",
        attributes: [
          { trait_type: "Background", value: "Grey" },
          { trait_type: "Fur", value: "Sand" },
          { trait_type: "Mouth", value: "Okay" },
          { trait_type: "Eyes", value: "Defeated" },
          { trait_type: "Clothes", value: "Double Jacket" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 9244, absolute_rarity: 9244, crawl: {} },
          merarity: {
            rank: 9244,
            tokenKey: "H4FYiPH2E9rRv8juiX5GwHDFdiB6nvPrRqHxb4QBv1kT",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T13:26:37.325Z",
        updatedAt: "2023-05-07T13:26:37.325Z"
      },
      {
        mintAddress: "H4DxWmaKQhxDdnC7UFqzPDKs6NGheKiJmEDmmGJyhpCr",
        supply: 1,
        title: "Okay Bear #8260",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 106.987,
        escrowPubkey: "D6Tx3dj2b4mp6GWj2FT5RzwL5icQT2CRjKKLs6FrZYa2",
        owner: "C6Vr2332CnT1dxcVbPzCUDHGXSbB9z6QZT6G9W4nrwEi",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "AA61yEqCmzHX7SyZbwbtk2SXeivQPTK6iKppGna4EmQP",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/fxVcGz4dyC9oQKkpb6lHOh5syaruLab3rGdfTZV-Lws",
        attributes: [
          { trait_type: "Background", value: "Grey" },
          { trait_type: "Fur", value: "Ginger" },
          { trait_type: "Mouth", value: "Ugh" },
          { trait_type: "Eyes", value: "Annoyed" },
          { trait_type: "Clothes", value: "Formal Vest" },
          { trait_type: "Eyewear", value: "VR Headset" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 983, absolute_rarity: 983, crawl: {} },
          merarity: {
            rank: 983,
            tokenKey: "H4DxWmaKQhxDdnC7UFqzPDKs6NGheKiJmEDmmGJyhpCr",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T03:28:45.908Z",
        updatedAt: "2023-05-07T03:28:45.908Z"
      },
      {
        mintAddress: "H2x3R3qV7gsJ61QDrCDrxm4VjeoP9tjbQGpV1Fur7Fzs",
        supply: 1,
        title: "Okay Bear #4587",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 275,
        escrowPubkey: "3zxYWTzYgKsGvG4xCWR7bsSDADTfTKihpcbVPJFXm6U3",
        owner: "H3AkHZHfcqGCcJpBn3FJWe52LcLxFMJQoZvZ6XyApFWf",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "4dQtFsEWwoQAvFzRuELceEeEqErPaG48NmJ8id483tPu",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/zA-oEukF994TM50sH55wXR7CxAbXgfRLY2IRRGioTTg",
        attributes: [
          { trait_type: "Background", value: "Green" },
          { trait_type: "Fur", value: "Lofi" },
          { trait_type: "Mouth", value: "Okay" },
          { trait_type: "Eyes", value: "Annoyed" },
          { trait_type: "Hat", value: "Worn Out Cap" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 8734, absolute_rarity: 8734, crawl: {} },
          merarity: {
            rank: 8734,
            tokenKey: "H2x3R3qV7gsJ61QDrCDrxm4VjeoP9tjbQGpV1Fur7Fzs",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-08T06:15:43.362Z",
        updatedAt: "2023-05-08T06:15:43.362Z"
      },
      {
        mintAddress: "H1W5V1ST79Ac9ztWJABowjGKUsJ8oN9VSvrdFnyspqAg",
        supply: 1,
        title: "Okay Bear #1823",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 350,
        escrowPubkey: "9mQFxaWPNcP1PVqhYgCkPhrkMXekNhKxovDUwh3K7bqj",
        owner: "75dpFkhvpGcnCCXr9PGSgFxR4MeyAbmWdwLTh3zqYa4b",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "H4E1kcEjX1XPoCrWSGjuHX6JgAKaaPZHwSGQLx5ABnG6",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/mlyJmM6DU6rdbfhsAQDht3Sn3LDrqdxJNTvd1vUUGfA",
        attributes: [
          { trait_type: "Background", value: "White" },
          { trait_type: "Fur", value: "Tan" },
          { trait_type: "Mouth", value: "Okay" },
          { trait_type: "Eyes", value: "Happy" },
          { trait_type: "Hat", value: "Skate Cap" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 9802, absolute_rarity: 9802, crawl: {} },
          merarity: {
            rank: 9802,
            tokenKey: "H1W5V1ST79Ac9ztWJABowjGKUsJ8oN9VSvrdFnyspqAg",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T16:31:16.567Z",
        updatedAt: "2023-05-06T16:31:16.567Z"
      },
      {
        mintAddress: "GZDxFbHzdqjAuEWGZyopKeXBBp4T3SNmpbXmHEN5h6gY",
        supply: 1,
        title: "Okay Bear #8293",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 199,
        escrowPubkey: "7nuida6AqTnB1vVjvqQizZweUdZV5TMi2twobcYrvzfn",
        owner: "2cFuhyRfNoTvBxDgkq8XJ7EF7gzP6eWgvHx9G2qnEdmM",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "8bLyT96RDP3FxwKNTsU6YutUwn5uuTEagnudqgrhMLTk",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/aV86b4tpFHGLmo1Or6FMFjfMhLDJf1T25zHFfOTpbsM",
        attributes: [
          { trait_type: "Background", value: "White" },
          { trait_type: "Fur", value: "Green" },
          { trait_type: "Mouth", value: "Raspberry" },
          { trait_type: "Eyes", value: "Tired" },
          { trait_type: "Hat", value: "Pom Pom Beanie" },
          { trait_type: "Clothes", value: "Faded Denim Jacket" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 2207, absolute_rarity: 2207, crawl: {} },
          merarity: {
            rank: 2207,
            tokenKey: "GZDxFbHzdqjAuEWGZyopKeXBBp4T3SNmpbXmHEN5h6gY",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T09:56:19.911Z",
        updatedAt: "2023-05-06T09:56:19.911Z"
      },
      {
        mintAddress: "Gz59fhTLoqTnGZ6xXmsZHTj7bWpPVoxv2dQFxrgCc8QP",
        supply: 1,
        title: "Okay Bear #9388",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 250,
        escrowPubkey: "6PmKVPY7Xt2PfPgPnp6KeMgJ9wFdq7vwXjRwkfsuhQ9C",
        owner: "H3AkHZHfcqGCcJpBn3FJWe52LcLxFMJQoZvZ6XyApFWf",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "Dj4S65j6hwetqRZnuvpk8cSmyJCJKj5CybyT9oRBaND2",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/hBg2q4BYCpsPyLcMB6FhbxO3s2_GyJe8epvo3bgtxW4",
        attributes: [
          { trait_type: "Background", value: "Blue" },
          { trait_type: "Fur", value: "Lofi" },
          { trait_type: "Mouth", value: "Okay" },
          { trait_type: "Eyes", value: "Spirited" },
          { trait_type: "Hat", value: "Runner Cap" },
          { trait_type: "Clothes", value: "Okay Hoodie" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 4485, absolute_rarity: 4485, crawl: {} },
          merarity: {
            rank: 4485,
            tokenKey: "Gz59fhTLoqTnGZ6xXmsZHTj7bWpPVoxv2dQFxrgCc8QP",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-06T05:17:51.307Z",
        updatedAt: "2023-05-06T05:17:51.307Z"
      },
      {
        mintAddress: "GYXBHKHD7v4Vfds82iJ1uw57AeaS8oq1vtm8Q88y4UoB",
        supply: 1,
        title: "Okay Bear #9426",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 190,
        escrowPubkey: "2VcrVMSCcLKvkESrJHoJv4Doae9tZEd12yHHFH3CVjnD",
        owner: "CMC9b8R7cv4i4oeab3zRcmwZbUSxe88BsLpJ7gZLoFgz",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "FzcjwGqGgusRM6QE9FvU1qwBVtpvKiaEsxR9YKvFCGZZ",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/YfdObE-TnOsigryCzvZURU65-FWCNWE52RyYvi3jcOI",
        attributes: [
          { trait_type: "Background", value: "Blue" },
          { trait_type: "Fur", value: "Panda" },
          { trait_type: "Mouth", value: "Honey" },
          { trait_type: "Eyes", value: "Happy" },
          { trait_type: "Hat", value: "Pom Pom Beanie" },
          { trait_type: "Clothes", value: "Tech Jacket" },
          { trait_type: "Eyewear", value: "Clear Glasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 33, absolute_rarity: 33, crawl: {} },
          merarity: {
            rank: 33,
            tokenKey: "GYXBHKHD7v4Vfds82iJ1uw57AeaS8oq1vtm8Q88y4UoB",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-08T01:16:16.823Z",
        updatedAt: "2023-05-08T01:16:16.823Z"
      },
      {
        mintAddress: "GXBpcbRga4q9C2WYeNfAyFNoeCfBrTQpL94ZM4pQdPSY",
        supply: 1,
        title: "Okay Bear #1712",
        content:
          "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        primarySaleHappened: true,
        updateAuthority: "4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa",
        onChainCollection: {
          key: "3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3",
          verified: 1,
          data: {
            name: "Okay Bears",
            image:
              "https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c",
            description:
              "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."
          }
        },
        sellerFeeBasisPoints: 500,
        creators: [
          {
            address: "3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9",
            verified: 1,
            share: 0
          },
          {
            address: "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
            verified: 0,
            share: 100
          }
        ],
        price: 275,
        escrowPubkey: "J58nyewBN1GpZ6B91xKMziM5WWKxPr7vRMgj24MbEFjd",
        owner: "H3AkHZHfcqGCcJpBn3FJWe52LcLxFMJQoZvZ6XyApFWf",
        v2: {
          auctionHouseKey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          sellerReferral: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          expiry: -1
        },
        id: "5kCca65Kigr1jbxUgmsRbeuZeySyxjy6X8NmntBQUZ5w",
        tokenDelegateValid: false,
        isFrozen: true,
        tokenStandard: 5,
        img: "https://arweave.net/oyTifG8p4qh4Jn3TySoesuYNHg6mSo6DLIvBRgLO9uU",
        attributes: [
          { trait_type: "Background", value: "Cream" },
          { trait_type: "Fur", value: "Lofi" },
          { trait_type: "Mouth", value: "Oou" },
          { trait_type: "Eyes", value: "Happy" },
          { trait_type: "Eyewear", value: "Barrel Sunglasses" }
        ],
        externalURL: "https://www.okaybears.com/",
        collectionName: "okay_bears",
        collectionTitle: "Okay Bears",
        isTradeable: true,
        rarity: {
          moonrank: { rank: 3520, absolute_rarity: 3520, crawl: {} },
          merarity: {
            rank: 3520,
            tokenKey: "GXBpcbRga4q9C2WYeNfAyFNoeCfBrTQpL94ZM4pQdPSY",
            score: 0
          }
        },
        listingType: "M2",
        createdAt: "2023-05-07T19:46:24.261Z",
        updatedAt: "2023-05-07T19:46:24.261Z"
      }
    ]
  }
];
