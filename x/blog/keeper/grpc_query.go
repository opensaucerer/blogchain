package keeper

import (
	"github.com/samperfect/blog/x/blog/types"
)

var _ types.QueryServer = Keeper{}
