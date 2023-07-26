package controler

import (
	"employee/db"
	"employee/model"
	"net/http"

	"github.com/gin-gonic/gin"
)

var user model.User

func Create(ctx *gin.Context) {

	ctx.BindJSON(&user)

	err := db.Db.Create(&user).Error

	if err != nil {
		ctx.JSON(http.StatusUnauthorized, err.Error())
		return
	}

	ctx.JSON(200, user)
}

func Login(ctx *gin.Context) {

	ctx.BindJSON(&user)
	email := user.Email
	password := user.Password
	err := db.Db.First(&user, "email = ? and password = ?", email, password).Error
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, err.Error())
		return
	}

	ctx.JSON(200, user)
}
