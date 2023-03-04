/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  CompanyFactory,
  CompanyFactoryInterface,
} from "../CompanyFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract Company",
        name: "company",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "CompanyCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "companies",
    outputs: [
      {
        internalType: "contract Company[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "companiesCount",
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
        name: "name",
        type: "string",
      },
    ],
    name: "createCompany",
    outputs: [],
    stateMutability: "nonpayable",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611c0b806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630194ff8c14610051578063835331e11461006f578063e00dd16114610084578063fd7f611e1461008c575b600080fd5b6100596100a1565b60405161006691906102f4565b60405180910390f35b610077610110565b604051610066919061034e565b610077610116565b61009f61009a366004610235565b61011c565b005b6060600080548060200260200160405190810160405280929190818152602001828054801561010657602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116100db575b5050505050905090565b60005490565b60015481565b6000600154823360405161012f90610228565b61013b93929190610357565b604051809103906000f080158015610157573d6000803e3d6000fd5b5060008054600180820183558280527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56390910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85161790558054929350918291906101dc9083906103ee565b9091555050604051339073ffffffffffffffffffffffffffffffffffffffff8316907f788398d6551ff56e32d287d0bdcd3a5611ef3af0a4ce1a879dc5f1f84f79bdcb90600090a35050565b61177b8061045b83390190565b60006020808385031215610247578182fd5b823567ffffffffffffffff8082111561025e578384fd5b818501915085601f830112610271578384fd5b8135818111156102835761028361042b565b604051847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011682010181811084821117156102c4576102c461042b565b60405281815283820185018810156102da578586fd5b818585018683013790810190930193909352509392505050565b6020808252825182820181905260009190848201906040850190845b8181101561034257835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610310565b50909695505050505050565b90815260200190565b600084825260206060818401528451806060850152825b8181101561038a5786810183015185820160800152820161036e565b8181111561039b5783608083870101525b5073ffffffffffffffffffffffffffffffffffffffff9490941660408401525050601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160160800192915050565b60008219821115610426577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfe60806040523480156200001157600080fd5b506040516200177b3803806200177b8339810160408190526200003491620001a3565b62000048620000426200008c565b62000090565b6004839055815162000062906005906020850190620000e0565b50600680546001600160a01b0319166001600160a01b039290921691909117905550620002e59050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620000ee9062000292565b90600052602060002090601f0160209004810192826200011257600085556200015d565b82601f106200012d57805160ff19168380011785556200015d565b828001600101855582156200015d579182015b828111156200015d57825182559160200191906001019062000140565b506200016b9291506200016f565b5090565b5b808211156200016b576000815560010162000170565b80516001600160a01b03811681146200019e57600080fd5b919050565b600080600060608486031215620001b8578283fd5b8351602080860151919450906001600160401b0380821115620001d9578485fd5b818701915087601f830112620001ed578485fd5b815181811115620002025762000202620002cf565b604051601f8201601f1916810185018381118282101715620002285762000228620002cf565b60405281815283820185018a10156200023f578687fd5b8692505b8183101562000262578383018501518184018601529184019162000243565b818311156200027357868583830101525b8096505050505050620002896040850162000186565b90509250925092565b600281046001821680620002a757607f821691505b60208210811415620002c957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61148680620002f56000396000f3fe6080604052600436106100c75760003560e01c8063af640d0f11610074578063d27fb6071161004e578063d27fb607146101eb578063e00dd16114610200578063f2fde38b14610215576100c7565b8063af640d0f146101a3578063c7012a98146101b8578063c7210c83146101cb576100c7565b80637e397536116100a55780637e397536146101345780638da5cb5b146101615780639aaa7a5914610183576100c7565b806306fdde03146100cc5780636cff9c7b146100f7578063715018a61461011d575b600080fd5b3480156100d857600080fd5b506100e1610235565b6040516100ee91906110e4565b60405180910390f35b34801561010357600080fd5b5061010c6102c3565b6040516100ee95949392919061103e565b34801561012957600080fd5b50610132610705565b005b34801561014057600080fd5b5061015461014f366004610f12565b61078d565b6040516100ee9190611304565b34801561016d57600080fd5b506101766107ae565b6040516100ee919061101d565b34801561018f57600080fd5b5061013261019e366004610e12565b6107ca565b3480156101af57600080fd5b50610154610936565b6101326101c6366004610f12565b61093c565b3480156101d757600080fd5b506101326101e6366004610e8d565b610a33565b3480156101f757600080fd5b50610176610b50565b34801561020c57600080fd5b50610154610b6c565b34801561022157600080fd5b50610132610230366004610def565b610b72565b600580546102429061138e565b80601f016020809104026020016040519081016040528092919081815260200182805461026e9061138e565b80156102bb5780601f10610290576101008083540402835291602001916102bb565b820191906000526020600020905b81548152906001019060200180831161029e57829003601f168201915b505050505081565b6060806060806060600060015490508067ffffffffffffffff8111156102f957634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561032c57816020015b60608152602001906001900390816103175790505b5095508067ffffffffffffffff81111561035657634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561038957816020015b60608152602001906001900390816103745790505b5094508067ffffffffffffffff8111156103b357634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156103dc578160200160208202803683370190505b5093508067ffffffffffffffff81111561040657634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561042f578160200160208202803683370190505b5092508067ffffffffffffffff81111561045957634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610482578160200160208202803683370190505b50915060005b818110156106fc5760008181526002602052604090206001810180546104ad9061138e565b80601f01602080910402602001604051908101604052809291908181526020018280546104d99061138e565b80156105265780601f106104fb57610100808354040283529160200191610526565b820191906000526020600020905b81548152906001019060200180831161050957829003601f168201915b505050505088838151811061054b57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508060020180546105659061138e565b80601f01602080910402602001604051908101604052809291908181526020018280546105919061138e565b80156105de5780601f106105b3576101008083540402835291602001916105de565b820191906000526020600020905b8154815290600101906020018083116105c157829003601f168201915b505050505087838151811061060357634e487b7160e01b600052603260045260246000fd5b60209081029190910101526003810154865173ffffffffffffffffffffffffffffffffffffffff9091169087908490811061064e57634e487b7160e01b600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505080600401548583815181106106ad57634e487b7160e01b600052603260045260246000fd5b60200260200101818152505080600001548483815181106106de57634e487b7160e01b600052603260045260246000fd5b602090810291909101015250806106f4816113c9565b915050610488565b50509091929394565b61070d610c3e565b73ffffffffffffffffffffffffffffffffffffffff1661072b6107ae565b73ffffffffffffffffffffffffffffffffffffffff1614610781576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077890611272565b60405180910390fd5b61078b6000610c42565b565b6003818154811061079d57600080fd5b600091825260209091200154905081565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60065473ffffffffffffffffffffffffffffffffffffffff16331461081b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610778906112a7565b600180546000818152600260209081526040909120918255865191926108479290840191880190610cb7565b50835161085d9060028301906020870190610cb7565b50600381810180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861617905560048201839055600180548254808301845560009384527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b01819055909182916108ec908390611319565b90915550506040517f8a5ab32cc99961f13a7c5c8047c8ad8820764804da9f73ee8507093833e4fa6b906109279087908790879087906110f7565b60405180910390a15050505050565b60045481565b60015460005b818110156109f457600081815260026020526040812060038101546004820154919273ffffffffffffffffffffffffffffffffffffffff90911691869061098d90633b9aca00611351565b6109979190611331565b60405190915073ffffffffffffffffffffffffffffffffffffffff83169082156108fc029083906000818181858888f193505050501580156109dd573d6000803e3d6000fd5b5050505080806109ec906113c9565b915050610942565b507f94c8034662d5a2ff6a5e2c65ae1eb76197e194aea05530c86682777c03451721600534604051610a27929190611146565b60405180910390a15050565b60065473ffffffffffffffffffffffffffffffffffffffff163314610a84576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610778906112a7565b600081815260026020908152604090912086519091610aaa916001840191890190610cb7565b508451610ac09060028301906020880190610cb7565b506003810180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8616179055600481018390556040517ffe0bac03f10b651555d692e0f90b8a2cc5d2cc80339da57342f968581c730a1290610b409088908890889088906110f7565b60405180910390a1505050505050565b60065473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b610b7a610c3e565b73ffffffffffffffffffffffffffffffffffffffff16610b986107ae565b73ffffffffffffffffffffffffffffffffffffffff1614610be5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077890611272565b73ffffffffffffffffffffffffffffffffffffffff8116610c32576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077890611215565b610c3b81610c42565b50565b3390565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054610cc39061138e565b90600052602060002090601f016020900481019282610ce55760008555610d2b565b82601f10610cfe57805160ff1916838001178555610d2b565b82800160010185558215610d2b579182015b82811115610d2b578251825591602001919060010190610d10565b50610d37929150610d3b565b5090565b5b80821115610d375760008155600101610d3c565b600082601f830112610d60578081fd5b813567ffffffffffffffff80821115610d7b57610d7b611418565b60405160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501168201018181108382111715610dbd57610dbd611418565b604052828152848301602001861015610dd4578384fd5b82602086016020830137918201602001929092529392505050565b600060208284031215610e00578081fd5b8135610e0b8161142e565b9392505050565b60008060008060808587031215610e27578283fd5b843567ffffffffffffffff80821115610e3e578485fd5b610e4a88838901610d50565b95506020870135915080821115610e5f578485fd5b50610e6c87828801610d50565b9350506040850135610e7d8161142e565b9396929550929360600135925050565b600080600080600060a08688031215610ea4578081fd5b853567ffffffffffffffff80821115610ebb578283fd5b610ec789838a01610d50565b96506020880135915080821115610edc578283fd5b50610ee988828901610d50565b9450506040860135610efa8161142e565b94979396509394606081013594506080013592915050565b600060208284031215610f23578081fd5b5035919050565b6000815180845260208085019450848183028601828601855b85811015610f6d578383038952610f5b838351610fb4565b98850198925090840190600101610f43565b5090979650505050505050565b6000815180845260208085019450808401835b83811015610fa957815187529582019590820190600101610f8d565b509495945050505050565b60008151808452815b81811015610fd957602081850181015186830182015201610fbd565b81811115610fea5782602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b600060a0825261105160a0830188610f2a565b6020838203818501526110648289610f2a565b84810360408601528751808252828901935090820190845b818110156110ae57845173ffffffffffffffffffffffffffffffffffffffff168352938301939183019160010161107c565b505084810360608601526110c28188610f7a565b9250505082810360808401526110d88185610f7a565b98975050505050505050565b600060208252610e0b6020830184610fb4565b60006080825261110a6080830187610fb4565b828103602084015261111c8187610fb4565b73ffffffffffffffffffffffffffffffffffffffff95909516604084015250506060015292915050565b60408152825460009081906002810460018083168061116657607f831692505b602080841082141561118657634e487b7160e01b87526022600452602487fd5b6111938460408a01611304565b8280156111a757600181146111d657611200565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00871682528282019750611200565b6111df8c61130d565b895b878110156111fa578154848201529086019084016111e1565b83019850505b50509690960196909652509095945050505050565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526025908201527f6f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e60408201527f6374696f6e000000000000000000000000000000000000000000000000000000606082015260800190565b90815260200190565b60009081526020902090565b6000821982111561132c5761132c611402565b500190565b60008261134c57634e487b7160e01b81526012600452602481fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561138957611389611402565b500290565b6002810460018216806113a257607f821691505b602082108114156113c357634e487b7160e01b600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156113fb576113fb611402565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114610c3b57600080fdfea2646970667358221220c74c84f7d5b277dc56df1cf773c30f87122512b51d56d196352020bddd66108764736f6c63430008000033a2646970667358221220317bb0310854ea4c3ad67b3817acef6ba8d7479a2036139e88f7981d79114dbf64736f6c63430008000033";

type CompanyFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CompanyFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CompanyFactory__factory extends ContractFactory {
  constructor(...args: CompanyFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CompanyFactory> {
    return super.deploy(overrides || {}) as Promise<CompanyFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CompanyFactory {
    return super.attach(address) as CompanyFactory;
  }
  override connect(signer: Signer): CompanyFactory__factory {
    return super.connect(signer) as CompanyFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CompanyFactoryInterface {
    return new utils.Interface(_abi) as CompanyFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CompanyFactory {
    return new Contract(address, _abi, signerOrProvider) as CompanyFactory;
  }
}
