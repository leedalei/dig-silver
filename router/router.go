package router

import (
	"gf-app/app/api/gaying"
	"gf-app/app/api/hello"
	"gf-app/app/auth"
	"gf-app/app/service/middleware"

	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/net/ghttp"
	"github.com/gogf/swagger"
)

func init() {
	s := g.Server()
	s.BindHandler("POST:/login", auth.GfJWTMiddleware.LoginHandler)
	s.Plugin(&swagger.Swagger{})
	s.Group("/", func(group *ghttp.RouterGroup) {
		group.ALL("/", hello.Hello)
	})

	s.Group("/gaying", func(g *ghttp.RouterGroup) {
		g.Middleware(middleware.CORS, middleware.MiddlewareAuth)
		g.ALL("/refresh_token", auth.GfJWTMiddleware.RefreshHandler)
		g.ALL("/", gaying.Gaying)
	})
}
