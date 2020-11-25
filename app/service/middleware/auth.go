package middleware

import (
	"gf-app/app/auth"

	"github.com/gogf/gf/net/ghttp"
)

func MiddlewareAuth(r *ghttp.Request) {
	auth.GfJWTMiddleware.MiddlewareFunc()(r)
	r.Middleware.Next()
}
