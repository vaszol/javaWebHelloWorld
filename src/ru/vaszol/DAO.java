package ru.vaszol;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vas on 24.10.2015.
 */
public class DAO {
    public static Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.jdbc.Driver");
        return DriverManager.getConnection("jdbc:mysql://localhost:3306/webdopog", "donkey", "123");
    }


//    static List<Post> posts;
//    static {
//        posts = new ArrayList<Post>();
//        posts.add(new Post(1,"hello"));
//        posts.add(new Post(2,"world"));
//        posts.add(new Post(3,"people"));
//    }

    public static List<Post> getPosts() throws SQLException, ClassNotFoundException {
        try (Connection c = getConnection();
             PreparedStatement ps = c.prepareStatement("SELECT id,text from posts");
             ResultSet resultSet = ps.executeQuery();) {

            ArrayList<Post> posts = new ArrayList<>();
            while (resultSet.next()) {
                int id = resultSet.getInt(1);
                String text = resultSet.getString(2);
                posts.add(new Post(id, text));
            }

            return posts;
        }

//        return posts;
    }

//    public static void main(String[] args) throws SQLException, ClassNotFoundException {
//        System.out.println(getPosts());
//    }

    public static void deletePost(int id) throws SQLException, ClassNotFoundException {
        try (Connection c = getConnection();
             PreparedStatement ps = c.prepareStatement("DELETE FROM posts WHERE id=?");
             ) {
            ps.setInt(1,id);
            ps.executeUpdate();
        }
//        Post d = null;
//        for(Post p :posts){
//            if(p.id == id){
//                d=p;
//            }
//        }
//        if (d!=null){
//            posts.remove(d);
//        }
    }

    public static void addPost(String text) throws SQLException, ClassNotFoundException {
        try (Connection c = getConnection();
             PreparedStatement ps = c.prepareStatement("INSERT INTO posts (text) VALUES (?)");
        ) {
            ps.setString(1,text);
            ps.executeUpdate();
        }
//        posts.add(new Post(posts.size()+1,text));
    }

}
