package learn.letsgo.Data;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class SavedEventJdbcTemplateRepositoryTest {

    @Autowired
    SavedEventJdbcTemplateRepository savedEventRepository;

    @Autowired
    AppUserJdbcTemplateRepository appUserRepository;
    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

    @Test
    void shouldAddEventToUser() {
        int initialCount =  appUserRepository.findByUsername("eric@dev10.com").getEvents().size();
        boolean actual = savedEventRepository.addEventToUser(1,1);
        assertTrue(actual);
        int resultCount = appUserRepository.findByUsername("eric@dev10.com").getEvents().size();
        assertEquals(1, resultCount - initialCount);
    }

    @Test
    void shouldAddContactToEvent() {
        boolean actual = savedEventRepository.addContactToEvent(1,1);
        assertTrue(actual);
    }

    @Test
    void shouldRemoveContactFromEvent() {
        boolean actual = savedEventRepository.removeContactFromEvent(2,1);
        assertTrue(actual);
        boolean repeat = savedEventRepository.removeContactFromEvent(2,1);
        assertFalse(repeat);

    }

    @Test
    void shouldAddGroupToEvent() {
        boolean actual = savedEventRepository.addGroupToEvent(1,1);
        assertTrue(actual);
    }

    @Test
    void removeGroupFromEvent() {
        boolean actual = savedEventRepository.removeGroupFromEvent(2,1);
        assertTrue(actual);
        boolean repeat = savedEventRepository.removeGroupFromEvent(2,1);
        assertFalse(repeat);
    }

    @Test
    void shouldRemoveEventFromUser() {
        int initialCount =  appUserRepository.findByUsername("arit@dev10.com").getEvents().size();
        System.out.println(initialCount);
        boolean actual = savedEventRepository.removeEventFromUser(2,3);
        assertTrue(actual);
        int resultCount = appUserRepository.findByUsername("arit@dev10.com").getEvents().size();
        System.out.println(resultCount);
        assertEquals(-1, resultCount - initialCount);
    }
}