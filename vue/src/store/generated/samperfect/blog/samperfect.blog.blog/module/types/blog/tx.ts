/* eslint-disable */
export const protobufPackage = "samperfect.blog.blog";

/** Msg defines the Msg service. */
export interface Msg {}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}
