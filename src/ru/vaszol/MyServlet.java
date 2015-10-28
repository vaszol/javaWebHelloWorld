package ru.vaszol;

import java.io.IOException;
import java.sql.SQLException;

/**
 * Created by vas on 24.10.2015.
 */
@javax.servlet.annotation.WebServlet(name = "MyServlet",urlPatterns = "/posts")
public class MyServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        try {
            request.setAttribute("posts",DAO.getPosts()); //в request кладем массив всех постов, из DAO.getPosts()
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        request.getRequestDispatcher("WEB-INF/posts.jsp").forward(request,response); //редиректим на jsp страницу наш запрос
    }
}
