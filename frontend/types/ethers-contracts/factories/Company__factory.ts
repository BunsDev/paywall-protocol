/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Company, CompanyInterface } from "../Company";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "employeeName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "employeeRank",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "employeeAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payment",
        type: "uint256",
      },
    ],
    name: "employeeCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "employeeName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "employeeRank",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "employeeAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payment",
        type: "uint256",
      },
    ],
    name: "employeeInfoModified",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "companyName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payment",
        type: "uint256",
      },
    ],
    name: "employeesPaid",
    type: "event",
  },
  {
    inputs: [],
    name: "companyOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_employeeName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_employeeRank",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "_employeeAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_payment",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "editEmployee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "employeeIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllEmployee",
    outputs: [
      {
        internalType: "string[]",
        name: "employeeNames",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "employeeRanks",
        type: "string[]",
      },
      {
        internalType: "address[]",
        name: "employeeAddresses",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "payments",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "id",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payEmployee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_employeeName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_employeeRank",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "_employeeAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_payment",
        type: "uint256",
      },
    ],
    name: "registerEmployee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001693380380620016938339810160408190526200003491620001a3565b62000048620000426200008c565b62000090565b6004839055815162000062906005906020850190620000e0565b50600680546001600160a01b0319166001600160a01b039290921691909117905550620002e59050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620000ee9062000292565b90600052602060002090601f0160209004810192826200011257600085556200015d565b82601f106200012d57805160ff19168380011785556200015d565b828001600101855582156200015d579182015b828111156200015d57825182559160200191906001019062000140565b506200016b9291506200016f565b5090565b5b808211156200016b576000815560010162000170565b80516001600160a01b03811681146200019e57600080fd5b919050565b600080600060608486031215620001b8578283fd5b8351602080860151919450906001600160401b0380821115620001d9578485fd5b818701915087601f830112620001ed578485fd5b815181811115620002025762000202620002cf565b604051601f8201601f1916810185018381118282101715620002285762000228620002cf565b60405281815283820185018a10156200023f578687fd5b8692505b8183101562000262578383018501518184018601529184019162000243565b818311156200027357868583830101525b8096505050505050620002896040850162000186565b90509250925092565b600281046001821680620002a757607f821691505b60208210811415620002c957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61139e80620002f56000396000f3fe6080604052600436106100c75760003560e01c8063af640d0f11610074578063dca36b9a1161004e578063dca36b9a146101ed578063e00dd161146101f5578063f2fde38b1461020a576100c7565b8063af640d0f146101a3578063c7210c83146101b8578063d27fb607146101d8576100c7565b80637e397536116100a55780637e397536146101345780638da5cb5b146101615780639aaa7a5914610183576100c7565b806306fdde03146100cc5780636cff9c7b146100f7578063715018a61461011d575b600080fd5b3480156100d857600080fd5b506100e161022a565b6040516100ee9190611059565b60405180910390f35b34801561010357600080fd5b5061010c6102b8565b6040516100ee959493929190610fb3565b34801561012957600080fd5b506101326106fa565b005b34801561014057600080fd5b5061015461014f366004610e87565b610768565b6040516100ee9190611279565b34801561016d57600080fd5b50610176610789565b6040516100ee9190610f92565b34801561018f57600080fd5b5061013261019e366004610d87565b6107a5565b3480156101af57600080fd5b506101546108f7565b3480156101c457600080fd5b506101326101d3366004610e02565b6108fd565b3480156101e457600080fd5b50610176610a00565b610132610a1c565b34801561020157600080fd5b50610154610b15565b34801561021657600080fd5b50610132610225366004610d64565b610b1b565b60058054610237906112a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610263906112a6565b80156102b05780601f10610285576101008083540402835291602001916102b0565b820191906000526020600020905b81548152906001019060200180831161029357829003601f168201915b505050505081565b6060806060806060600060015490508067ffffffffffffffff8111156102ee57634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561032157816020015b606081526020019060019003908161030c5790505b5095508067ffffffffffffffff81111561034b57634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561037e57816020015b60608152602001906001900390816103695790505b5094508067ffffffffffffffff8111156103a857634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156103d1578160200160208202803683370190505b5093508067ffffffffffffffff8111156103fb57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610424578160200160208202803683370190505b5092508067ffffffffffffffff81111561044e57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610477578160200160208202803683370190505b50915060005b818110156106f15760008181526002602052604090206001810180546104a2906112a6565b80601f01602080910402602001604051908101604052809291908181526020018280546104ce906112a6565b801561051b5780601f106104f05761010080835404028352916020019161051b565b820191906000526020600020905b8154815290600101906020018083116104fe57829003601f168201915b505050505088838151811061054057634e487b7160e01b600052603260045260246000fd5b602002602001018190525080600201805461055a906112a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610586906112a6565b80156105d35780601f106105a8576101008083540402835291602001916105d3565b820191906000526020600020905b8154815290600101906020018083116105b657829003601f168201915b50505050508783815181106105f857634e487b7160e01b600052603260045260246000fd5b60209081029190910101526003810154865173ffffffffffffffffffffffffffffffffffffffff9091169087908490811061064357634e487b7160e01b600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505080600401548583815181106106a257634e487b7160e01b600052603260045260246000fd5b60200260200101818152505080600001548483815181106106d357634e487b7160e01b600052603260045260246000fd5b602090810291909101015250806106e9816112e1565b91505061047d565b50509091929394565b610702610bb3565b73ffffffffffffffffffffffffffffffffffffffff16610720610789565b73ffffffffffffffffffffffffffffffffffffffff161461075c5760405162461bcd60e51b8152600401610753906111e7565b60405180910390fd5b6107666000610bb7565b565b6003818154811061077857600080fd5b600091825260209091200154905081565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60065473ffffffffffffffffffffffffffffffffffffffff1633146107dc5760405162461bcd60e51b81526004016107539061121c565b600180546000818152600260209081526040909120918255865191926108089290840191880190610c2c565b50835161081e9060028301906020870190610c2c565b50600381810180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861617905560048201839055600180548254808301845560009384527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b01819055909182916108ad90839061128e565b90915550506040517f8a5ab32cc99961f13a7c5c8047c8ad8820764804da9f73ee8507093833e4fa6b906108e890879087908790879061106c565b60405180910390a15050505050565b60045481565b60065473ffffffffffffffffffffffffffffffffffffffff1633146109345760405162461bcd60e51b81526004016107539061121c565b60008181526002602090815260409091208651909161095a916001840191890190610c2c565b5084516109709060028301906020880190610c2c565b506003810180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8616179055600481018390556040517ffe0bac03f10b651555d692e0f90b8a2cc5d2cc80339da57342f968581c730a12906109f090889088908890889061106c565b60405180910390a1505050505050565b60065473ffffffffffffffffffffffffffffffffffffffff1681565b60065473ffffffffffffffffffffffffffffffffffffffff163314610a535760405162461bcd60e51b81526004016107539061121c565b60015460005b81811015610ad757600081815260026020526040808220600381015460048201549251919373ffffffffffffffffffffffffffffffffffffffff9091169291839183156108fc02918491818181858888f19350505050158015610ac0573d6000803e3d6000fd5b505050508080610acf906112e1565b915050610a59565b507f94c8034662d5a2ff6a5e2c65ae1eb76197e194aea05530c86682777c03451721600534604051610b0a9291906110bb565b60405180910390a150565b60015481565b610b23610bb3565b73ffffffffffffffffffffffffffffffffffffffff16610b41610789565b73ffffffffffffffffffffffffffffffffffffffff1614610b745760405162461bcd60e51b8152600401610753906111e7565b73ffffffffffffffffffffffffffffffffffffffff8116610ba75760405162461bcd60e51b81526004016107539061118a565b610bb081610bb7565b50565b3390565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054610c38906112a6565b90600052602060002090601f016020900481019282610c5a5760008555610ca0565b82601f10610c7357805160ff1916838001178555610ca0565b82800160010185558215610ca0579182015b82811115610ca0578251825591602001919060010190610c85565b50610cac929150610cb0565b5090565b5b80821115610cac5760008155600101610cb1565b600082601f830112610cd5578081fd5b813567ffffffffffffffff80821115610cf057610cf0611330565b60405160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501168201018181108382111715610d3257610d32611330565b604052828152848301602001861015610d49578384fd5b82602086016020830137918201602001929092529392505050565b600060208284031215610d75578081fd5b8135610d8081611346565b9392505050565b60008060008060808587031215610d9c578283fd5b843567ffffffffffffffff80821115610db3578485fd5b610dbf88838901610cc5565b95506020870135915080821115610dd4578485fd5b50610de187828801610cc5565b9350506040850135610df281611346565b9396929550929360600135925050565b600080600080600060a08688031215610e19578081fd5b853567ffffffffffffffff80821115610e30578283fd5b610e3c89838a01610cc5565b96506020880135915080821115610e51578283fd5b50610e5e88828901610cc5565b9450506040860135610e6f81611346565b94979396509394606081013594506080013592915050565b600060208284031215610e98578081fd5b5035919050565b6000815180845260208085019450848183028601828601855b85811015610ee2578383038952610ed0838351610f29565b98850198925090840190600101610eb8565b5090979650505050505050565b6000815180845260208085019450808401835b83811015610f1e57815187529582019590820190600101610f02565b509495945050505050565b60008151808452815b81811015610f4e57602081850181015186830182015201610f32565b81811115610f5f5782602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b600060a08252610fc660a0830188610e9f565b602083820381850152610fd98289610e9f565b84810360408601528751808252828901935090820190845b8181101561102357845173ffffffffffffffffffffffffffffffffffffffff1683529383019391830191600101610ff1565b505084810360608601526110378188610eef565b92505050828103608084015261104d8185610eef565b98975050505050505050565b600060208252610d806020830184610f29565b60006080825261107f6080830187610f29565b82810360208401526110918187610f29565b73ffffffffffffffffffffffffffffffffffffffff95909516604084015250506060015292915050565b6040815282546000908190600281046001808316806110db57607f831692505b60208084108214156110fb57634e487b7160e01b87526022600452602487fd5b6111088460408a01611279565b82801561111c576001811461114b57611175565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00871682528282019750611175565b6111548c611282565b895b8781101561116f57815484820152908601908401611156565b83019850505b50509690960196909652509095945050505050565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526025908201527f6f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e60408201527f6374696f6e000000000000000000000000000000000000000000000000000000606082015260800190565b90815260200190565b60009081526020902090565b600082198211156112a1576112a161131a565b500190565b6002810460018216806112ba57607f821691505b602082108114156112db57634e487b7160e01b600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156113135761131361131a565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114610bb057600080fdfea26469706673582212201ffc7730b11c7a93dc030a1e1fa53cedfe7b2f847d917229a66e521251c4234664736f6c63430008000033";

type CompanyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CompanyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Company__factory extends ContractFactory {
  constructor(...args: CompanyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _id: PromiseOrValue<BigNumberish>,
    _name: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Company> {
    return super.deploy(
      _id,
      _name,
      _owner,
      overrides || {}
    ) as Promise<Company>;
  }
  override getDeployTransaction(
    _id: PromiseOrValue<BigNumberish>,
    _name: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_id, _name, _owner, overrides || {});
  }
  override attach(address: string): Company {
    return super.attach(address) as Company;
  }
  override connect(signer: Signer): Company__factory {
    return super.connect(signer) as Company__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CompanyInterface {
    return new utils.Interface(_abi) as CompanyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Company {
    return new Contract(address, _abi, signerOrProvider) as Company;
  }
}