package gaying

import (
	"github.com/gogf/gf/net/ghttp"
)

func Gaying(r *ghttp.Request) {
	r.Response.Writeln("Gaying")
}
