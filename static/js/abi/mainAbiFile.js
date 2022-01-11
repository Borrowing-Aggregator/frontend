var mainABI = [
	{
		"inputs": [
			{
				"internalType": "contract IDataprovider",
				"name": "_dataprovider",
				"type": "address"
			},
			{
				"internalType": "contract IOracle",
				"name": "_pricefeed",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "aaveAPR",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "depositAPR",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "incentiveDepositAPRPercent",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "variableBorrowAPR",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "incentiveBorrowAPRPercent",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "stableBorrowAPR",
						"type": "uint256"
					}
				],
				"internalType": "struct DataTypes.Rates",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]