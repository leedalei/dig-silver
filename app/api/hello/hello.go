package hello

import (
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/net/ghttp"
)

// Hello is a demonstration route handler for output "Hello World!".
func Hello(r *ghttp.Request) {
	r.Response.WriteJson(g.Map{
		"count":              1,
		"next":               "null",
		"previous":           "null",
		"create_date":        "August 22 2020",
		"slug":               "python-web-dev-tutorials-1",
		"title":              "手把手教你用python写出你的个人博客",
		"update_date":        "2020-08-22T00:42:47.222524",
		"views":              0,
		"is_top":             false,
		"last_comment_user":  "还没有人评论哟，要来尬聊吗？",
		"comment_count":      0,
		"comment_user_count": 0,
	})
}
