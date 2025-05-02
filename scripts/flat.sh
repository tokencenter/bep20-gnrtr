#!/usr/bin/env bash

for contract in "HelloBEP20" "SimpleBEP20" "StandardBEP20" "BurnableBEP20" "MintableBEP20" "CommonBEP20" "UnlimitedBEP20" "AmazingBEP20"
do
  npx hardhat flatten contracts/token/BEP20/$contract.sol > dist/$contract.dist.sol
done

npx hardhat flatten contracts/service/ServiceReceiver.sol > dist/ServiceReceiver.dist.sol
