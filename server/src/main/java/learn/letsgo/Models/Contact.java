package learn.letsgo.Models;

import java.util.ArrayList;
import java.util.List;

public class Contact extends Identifiable {
    private int contactId;
    private int appUserId;
    private String email;
    private String phone;
    private String firstName;
    private String lastName;

    private List<Group> groups = new ArrayList<>();

    public Contact(){

    }

    public Contact(int appUserId, String email, String phone, String firstName, String lastName) {
        this.appUserId = appUserId;
        this.email = email;
        this.phone = phone;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public int getContactId() {
        return contactId;
    }

    public int getId() { return contactId; };

    public void setContactId(int contactId) {
        this.contactId = contactId;
    }

    public int getAppUserId() {
        return appUserId;
    }

    public void setAppUserId(int appUserId) {
        this.appUserId = appUserId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<Group> getGroups() {
        return new ArrayList<>(groups);
    }

    public void setGroups(List<Group> groups) {
        this.groups = groups;
    }

    @Override
    public String toString() {
        return "Contact{" +
                "contactId=" + contactId +
                ", appUserId=" + appUserId +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", groups=" + groups +
                '}';
    }
}
