package com.example.demo;

import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.List;

@Entity
public class HomeEntity {

    private int rank;
    private String Bankname;
    private String headq;
    private String assets;

    public HomeEntity() {

    }

    public HomeEntity(int rank, String bankname, String headq, String assets) {
        this.rank = rank;
        this.Bankname = bankname;
        this.headq = headq;
        this.assets = assets;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    public String getBankname() {
        return Bankname;
    }

    public void setBankname(String bankname) {
        Bankname = bankname;
    }

    public String getHeadq() {
        return headq;
    }

    public void setHeadq(String headq) {
        this.headq = headq;
    }

    public String getAssets() {
        return assets;
    }

    public void setAssets(String assets) {
        this.assets = assets;
    }
}
