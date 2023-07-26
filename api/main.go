package main

import (
	"employee/controler"
	"employee/db"
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
)

func init() {
	db.DBConnect()
}

func main() {
	r := gin.Default()

	r.POST("/create", controler.Create)
	r.POST("/login", controler.Login)

	err := r.Run()
	if err != nil {
		log.Fatalln("Server Run Failed:", err)
	}

	fmt.Printf("Server running on port 8080")

	db.DBConnect()

}
